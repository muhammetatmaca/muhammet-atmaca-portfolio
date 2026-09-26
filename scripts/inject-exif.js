import fs from 'fs';
import path from 'path';

/**
 * Builds a valid binary EXIF APP1 segment containing GPS and Author metadata.
 * Coordinates: Bayburt Center (40.2552° N, 40.2249° E, 1550m altitude)
 */
function createExifApp1Segment({
  description = "Muhammet Atmaca — VirelonSoft Bayburt Yazılım & Bilgisayar Mühendisliği Ofisi",
  artist = "Muhammet Atmaca",
  copyright = "© 2026 Muhammet Atmaca. All Rights Reserved. https://muhammetatmaca.com.tr",
  software = "Virelon Geo-EXIF Engine",
  lat = 40.2552,
  lon = 40.2249,
  alt = 1550,
}) {
  // Convert decimal degrees to Deg, Min, Sec
  function toDms(deg) {
    const d = Math.floor(deg);
    const minFloat = (deg - d) * 60;
    const m = Math.floor(minFloat);
    const s = Math.round((minFloat - m) * 60 * 100);
    return [
      [d, 1],
      [m, 1],
      [s, 100],
    ];
  }

  const latDms = toDms(lat);
  const lonDms = toDms(lon);

  // We write Little-Endian (II)
  const data = [];
  function writeUInt16(val) {
    data.push(val & 0xff, (val >> 8) & 0xff);
  }
  function writeUInt32(val) {
    data.push(val & 0xff, (val >> 8) & 0xff, (val >> 16) & 0xff, (val >> 24) & 0xff);
  }

  // Payload area for data exceeding 4 bytes
  const extraPayload = [];
  function addString(str) {
    const offset = 8 + 2 + 5 * 12 + 4 + 2 + 6 * 12 + 4 + extraPayload.length;
    const buf = Buffer.from(str + '\0', 'utf8');
    for (let b of buf) extraPayload.push(b);
    return { offset, count: buf.length };
  }

  function addRationals(rationals) {
    const offset = 8 + 2 + 5 * 12 + 4 + 2 + 6 * 12 + 4 + extraPayload.length;
    for (let [num, den] of rationals) {
      extraPayload.push(num & 0xff, (num >> 8) & 0xff, (num >> 16) & 0xff, (num >> 24) & 0xff);
      extraPayload.push(den & 0xff, (den >> 8) & 0xff, (den >> 16) & 0xff, (den >> 24) & 0xff);
    }
    return { offset, count: rationals.length };
  }

  // Pre-calculate strings
  const descInfo = addString(description);
  const artistInfo = addString(artist);
  const copyrightInfo = addString(copyright);
  const softwareInfo = addString(software);

  // Pre-calculate rationals for GPS
  const latRats = addRationals(latDms);
  const lonRats = addRationals(lonDms);
  const altRats = addRationals([[Math.round(alt), 1]]);

  // --- TIFF HEADER (8 bytes) ---
  data.push(0x49, 0x49); // 'II'
  writeUInt16(42);       // Magic
  writeUInt32(8);        // Offset to IFD0 (8 bytes)

  // --- IFD0 (5 entries) ---
  writeUInt16(5); // 5 tags

  // 1. ImageDescription (0x010E, ASCII=2)
  writeUInt16(0x010e);
  writeUInt16(2);
  writeUInt32(descInfo.count);
  writeUInt32(descInfo.offset);

  // 2. Software (0x0131, ASCII=2)
  writeUInt16(0x0131);
  writeUInt16(2);
  writeUInt32(softwareInfo.count);
  writeUInt32(softwareInfo.offset);

  // 3. Artist (0x013B, ASCII=2)
  writeUInt16(0x013b);
  writeUInt16(2);
  writeUInt32(artistInfo.count);
  writeUInt32(artistInfo.offset);

  // 4. Copyright (0x8298, ASCII=2)
  writeUInt16(0x8298);
  writeUInt16(2);
  writeUInt32(copyrightInfo.count);
  writeUInt32(copyrightInfo.offset);

  // 5. GPSInfo IFD Pointer (0x8825, LONG=4)
  const gpsIfdOffset = 8 + 2 + 5 * 12 + 4; // Right after IFD0
  writeUInt16(0x8825);
  writeUInt16(4);
  writeUInt32(1);
  writeUInt32(gpsIfdOffset);

  // Next IFD offset (0)
  writeUInt32(0);

  // --- GPS IFD (6 entries) ---
  writeUInt16(6);

  // 1. GPSVersionID (0x0000, BYTE=1, count=4)
  writeUInt16(0x0000);
  writeUInt16(1);
  writeUInt32(4);
  data.push(2, 3, 0, 0); // 2.3.0.0

  // 2. GPSLatitudeRef (0x0001, ASCII=2, count=2)
  writeUInt16(0x0001);
  writeUInt16(2);
  writeUInt32(2);
  data.push(0x4e, 0x00, 0x00, 0x00); // 'N\0'

  // 3. GPSLatitude (0x0002, RATIONAL=5, count=3)
  writeUInt16(0x0002);
  writeUInt16(5);
  writeUInt32(latRats.count);
  writeUInt32(latRats.offset);

  // 4. GPSLongitudeRef (0x0003, ASCII=2, count=2)
  writeUInt16(0x0003);
  writeUInt16(2);
  writeUInt32(2);
  data.push(0x45, 0x00, 0x00, 0x00); // 'E\0'

  // 5. GPSLongitude (0x0004, RATIONAL=5, count=3)
  writeUInt16(0x0004);
  writeUInt16(5);
  writeUInt32(lonRats.count);
  writeUInt32(lonRats.offset);

  // 6. GPSAltitude (0x0006, RATIONAL=5, count=1)
  writeUInt16(0x0006);
  writeUInt16(5);
  writeUInt32(altRats.count);
  writeUInt32(altRats.offset);

  // Next IFD (0)
  writeUInt32(0);

  // Append payload
  data.push(...extraPayload);

  // Construct full APP1 marker: [0xFF, 0xE1, LenHi, LenLo, 'E','x','i','f',0,0, ...tiff]
  const exifHeader = Buffer.from('Exif\0\0', 'ascii');
  const tiffBuffer = Buffer.from(data);
  const app1Length = 2 + exifHeader.length + tiffBuffer.length;

  const app1Buffer = Buffer.alloc(4 + exifHeader.length + tiffBuffer.length);
  app1Buffer[0] = 0xff;
  app1Buffer[1] = 0xe1;
  app1Buffer[2] = (app1Length >> 8) & 0xff;
  app1Buffer[3] = app1Length & 0xff;
  exifHeader.copy(app1Buffer, 4);
  tiffBuffer.copy(app1Buffer, 4 + exifHeader.length);

  return app1Buffer;
}

/**
 * Injects the EXIF APP1 segment into a JPEG buffer right after the SOI (0xFF, 0xD8) marker.
 * If an existing APP1/EXIF marker exists, it is replaced.
 */
function injectExifIntoJpeg(jpegBuffer, exifApp1Segment) {
  if (jpegBuffer[0] !== 0xff || jpegBuffer[1] !== 0xd8) {
    throw new Error('Not a valid JPEG buffer (missing 0xFFD8 SOI marker)');
  }

  let offset = 2;
  // Skip any existing APP0 / APP1 markers if present
  while (offset < jpegBuffer.length - 4) {
    if (jpegBuffer[offset] === 0xff && (jpegBuffer[offset + 1] === 0xe0 || jpegBuffer[offset + 1] === 0xe1)) {
      const segLength = (jpegBuffer[offset + 2] << 8) | jpegBuffer[offset + 3];
      offset += 2 + segLength;
    } else {
      break;
    }
  }

  const remaining = jpegBuffer.subarray(offset);
  const soi = Buffer.from([0xff, 0xd8]);
  return Buffer.concat([soi, exifApp1Segment, remaining]);
}

// Target images to inject
const IMAGES = [
  {
    filePath: 'artifacts/muhammet-portfolio/public/images/bayburt-software-office.jpg',
    description: 'Muhammet Atmaca — VirelonSoft Bayburt Yazılım & Bilgisayar Mühendisliği AR-GE Ofisi',
    artist: 'Muhammet Atmaca',
  },
  {
    filePath: 'artifacts/muhammet-portfolio/public/images/bayburt-office-reception.jpg',
    description: 'Muhammet Atmaca — Bayburt Yazılım Danışmanlığı ve Mobil Uygulama Geliştirme Karşılama Alanı',
    artist: 'Muhammet Atmaca',
  },
];

console.log('================================================================');
console.log('📸 EXIF & GPS INJECTION ENGINE (Google Lens & Google Images)');
console.log('================================================================');

for (const img of IMAGES) {
  const absPath = path.resolve(process.cwd(), img.filePath);
  if (!fs.existsSync(absPath)) {
    console.warn(`[EXIF] Dosya bulunamadı: ${absPath}`);
    continue;
  }

  const originalBuf = fs.readFileSync(absPath);
  const exifSegment = createExifApp1Segment({
    description: img.description,
    artist: img.artist,
    lat: 40.2552, // Bayburt
    lon: 40.2249, // Bayburt
    alt: 1550,    // Bayburt altitude
  });

  const injectedBuf = injectExifIntoJpeg(originalBuf, exifSegment);
  fs.writeFileSync(absPath, injectedBuf);

  console.log(`✅ [EXIF Injected]: ${img.filePath}`);
  console.log(`   - Enlem/Boylam: 40.2552° N, 40.2249° E (Bayburt Merkez)`);
  console.log(`   - Rakım: 1550 m`);
  console.log(`   - Yazar: ${img.artist}`);
  console.log(`   - Açıklama: ${img.description}`);
}

console.log('\n🎉 Tüm görsellere GPS ve Telif EXIF verileri başarıyla işlendi!');
