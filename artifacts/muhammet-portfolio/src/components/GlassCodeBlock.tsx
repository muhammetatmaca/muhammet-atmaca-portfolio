import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const FONT_MONO =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace";

const KEYWORDS = new Set([
  'import',
  'from',
  'export',
  'function',
  'const',
  'let',
  'var',
  'return',
  'if',
  'else',
  'for',
  'while',
  'new',
  'class',
  'extends',
  'default',
  'true',
  'false',
  'null',
  'undefined',
  'async',
  'await',
  'interface',
  'type',
]);

interface Token {
  text: string;
  kind: 'code' | 'comment' | 'string' | 'keyword' | 'number';
}

const tokenizeLine = (line: string): Token[] => {
  const trimmed = line.trimStart();
  if (trimmed.startsWith('//') || trimmed.startsWith('#')) {
    return [{ kind: 'comment', text: line }];
  }

  const tokens: Token[] = [];
  const re = /("[^"]*"|'[^']*'|`[^`]*`|\b\d+(?:\.\d+)?%?\b|\b[A-Za-z_$][\w$]*\b|[^\w"']+)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(line)) !== null) {
    const [t] = match;
    const [first] = t;
    if (first === '"' || first === "'" || first === '`') {
      tokens.push({ kind: 'string', text: t });
    } else if (/^\d+(?:\.\d+)?%?$/.test(t)) {
      tokens.push({ kind: 'number', text: t });
    } else if (/^[A-Za-z_$][\w$]*$/.test(t) && KEYWORDS.has(t)) {
      tokens.push({ kind: 'keyword', text: t });
    } else {
      tokens.push({ kind: 'code', text: t });
    }
  }
  return tokens;
};

const TOKEN_COLORS: Record<Token['kind'], string> = {
  code: '#e4e4e7',
  comment: '#71717a',
  keyword: '#c4b5fd',
  number: '#fcd34d',
  string: '#86efac',
};

export interface CodeTab {
  id: string;
  title: string;
  badge: string;
  code: string;
}

export const DEFAULT_CODE_TABS: CodeTab[] = [
  {
    id: 'mobile',
    title: 'MobileApp.tsx',
    badge: 'Mobil Mimari',
    code: `import { useState, useEffect } from 'react-native';
import { NativeEngine, StoreApproval } from '@virelon/mobile';

interface ProjectLaunchConfig {
  clientIdea: string;
  targetFPS: 60;
  platforms: ['iOS', 'Android'];
  offlineSupport: true;
}

export function deployApplication(config: ProjectLaunchConfig) {
  const [status, setStatus] = useState('Hazırlanıyor');

  useEffect(() => {
    // 1. Ekran tasarımları ve akıcı kullanıcı deneyimi
    const ui = createModernInterface(config.clientIdea);

    // 2. iPhone ve Android için eş zamanlı 60 FPS yerel derleme
    const nativeBuild = compileCrossPlatform(ui, { speed: 60 });

    // 3. Apple App Store ve Google Play resmi onay süreci
    publishToStores(nativeBuild).then(() => {
      setStatus('Yayında: Milyonlarca kullanıcıya hazır 🚀');
    });
  }, []);

  return <NativeEngine status={status} crashRate="0.00%" />;
}`,
  },
  {
    id: 'web',
    title: 'EnterpriseWeb.ts',
    badge: 'Web & Sistem',
    code: `import { NextServer, Database, Cache } from '@virelon/core';

interface WebPlatform {
  domain: 'muhammetatmaca.com.tr';
  sslRating: 'A+';
  googleIndexSpeed: 'Instant';
}

export async function launchEnterprisePlatform(clientRequest: WebPlatform) {
  // 1. Google 1. sıra ve zengin arama sonuçları optimizasyonu (SEO)
  const seoEngine = await Cache.preloadCoreWebVitals({
    targetLCP: '< 0.8s',
    richSnippets: true,
  });

  // 2. Yüksek trafikli sipariş ve veri güvenliği
  const database = await Database.connect({
    encryption: 'Zero-Trust AES-256',
    backupFrequency: 'Otomatik Her Gece',
  });

  return {
    uptime: '99.9%',
    pageLoadSpeed: '300ms',
    status: 'Canlı, Hızlı ve Güvenli',
  };
}`,
  },
  {
    id: 'guarantee',
    title: 'ClientGuarantee.ts',
    badge: 'Hizmet Güvencesi',
    code: `interface ClientContract {
  engineer: 'Muhammet Atmaca';
  communication: 'Doğrudan Mühendisle Birebir İletişim';
  hiddenCosts: 0;
}

export function calculateDelivery(projectScope: Scope): Guarantee {
  return {
    deliveryTime: '2 ila 6 Hafta',
    codeOwnership: '%100 Kaynak Kod Müşteriye Teslim',
    technicalSupport: '1 Yıl Ücretsiz Bakım ve Garanti',
    appStoreApproval: 'Onay Alana Kadar Kesintisiz Destek',
    satisfaction: 'Söz verilen tarihte eksiksiz teslim',
  };
}`,
  },
];

export interface GlassCodeBlockProps {
  tabs?: CodeTab[];
  initialTabId?: string;
  width?: string | number;
  maxHeight?: string | number;
  fontSize?: number;
  glassColor?: string;
  showTrafficLights?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const GlassCodeBlock = ({
  tabs = DEFAULT_CODE_TABS,
  initialTabId,
  width = '100%',
  maxHeight = 480,
  fontSize = 13.5,
  glassColor = 'rgba(13, 17, 26, 0.82)',
  showTrafficLights = true,
  className = '',
  style,
}: GlassCodeBlockProps) => {
  const [activeTabId, setActiveTabId] = useState(initialTabId || tabs[0]?.id || 'mobile');
  const [copied, setCopied] = useState(false);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const lines = (activeTab?.code || '').split('\n');

  const handleCopy = () => {
    if (!activeTab) return;
    navigator.clipboard.writeText(activeTab.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className={`glass-code-wrapper ${className}`}
      style={{
        position: 'relative',
        width,
        maxWidth: '100%',
        margin: '0 auto',
        ...style,
      }}
    >
      {/* Background ambient glowing aura */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-20px',
          background:
            'radial-gradient(ellipse at 35% 30%, rgba(42, 92, 219, 0.22), transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(147, 51, 234, 0.16), transparent 50%)',
          filter: 'blur(35px)',
          borderRadius: '32px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main glass frame */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.03) 100%)',
          borderRadius: '18px',
          padding: '1px',
          boxShadow:
            '0 28px 65px -15px rgba(10, 16, 30, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            WebkitBackdropFilter: 'blur(20px)',
            backdropFilter: 'blur(20px)',
            background: glassColor,
            borderRadius: '17px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Mac window header chrome */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
              background: 'rgba(255, 255, 255, 0.02)',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {/* Traffic lights & tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {showTrafficLights && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', opacity: 0.85 }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e', opacity: 0.85 }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', opacity: 0.85 }} />
                </div>
              )}

              {/* Tabs */}
              <div style={{ display: 'flex', gap: '6px' }}>
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      style={{
                        background: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                        border: isActive
                          ? '1px solid rgba(255, 255, 255, 0.16)'
                          : '1px solid transparent',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                        fontSize: '12px',
                        fontFamily: FONT_MONO,
                        fontWeight: isActive ? 600 : 400,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.18s ease',
                      }}
                    >
                      <span>{tab.title}</span>
                      <span
                        style={{
                          fontSize: '10px',
                          padding: '1px 5px',
                          borderRadius: '4px',
                          background: isActive ? 'rgba(42, 92, 219, 0.35)' : 'rgba(255, 255, 255, 0.06)',
                          color: isActive ? '#93c5fd' : 'rgba(255, 255, 255, 0.4)',
                        }}
                      >
                        {tab.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Copy button */}
            <button
              type="button"
              onClick={handleCopy}
              title="Kodu Kopyala"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '4px 9px',
                fontSize: '11px',
                color: copied ? '#86efac' : 'rgba(255, 255, 255, 0.65)',
                cursor: 'pointer',
                fontFamily: FONT_MONO,
                transition: 'all 0.18s ease',
              }}
            >
              {copied ? (
                <>
                  <Check size={12} color="#86efac" />
                  <span>Kopyalandı</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Kopyala</span>
                </>
              )}
            </button>
          </div>

          {/* Code body */}
          <div
            style={{
              padding: '18px 22px',
              fontFamily: FONT_MONO,
              fontSize,
              lineHeight: 1.62,
              overflowX: 'auto',
              maxHeight,
              scrollbarWidth: 'thin',
            }}
          >
            {lines.map((line, i) => {
              const tokens = tokenizeLine(line);
              return (
                <div
                  key={`${activeTab.id}-${i}`}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '16px',
                    whiteSpace: 'pre',
                  }}
                >
                  <span
                    style={{
                      color: 'rgba(255, 255, 255, 0.22)',
                      userSelect: 'none',
                      fontSize: '11px',
                      width: '24px',
                      textAlign: 'right',
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ flex: 1 }}>
                    {tokens.length === 0 ? (
                      <span style={{ display: 'inline-block', width: '1px' }}>&nbsp;</span>
                    ) : (
                      tokens.map((token, j) => (
                        <span key={j} style={{ color: TOKEN_COLORS[token.kind] }}>
                          {token.text}
                        </span>
                      ))
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCodeBlock;
