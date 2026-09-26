import React, { useState } from 'react';
import { Check, Copy, Code2 } from 'lucide-react';

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
  'async',
  'await',
  'interface',
  'type',
]);

const BOOLEANS = new Set(['true', 'false', 'null', 'undefined']);

const BUILTIN_TYPES = new Set([
  'string',
  'number',
  'boolean',
  'any',
  'void',
  'never',
  'unknown',
  'object',
]);

const REACT_HOOKS = new Set([
  'useState',
  'useEffect',
  'useMemo',
  'useCallback',
  'useRef',
  'useContext',
  'useRouter',
]);

type TokenKind =
  | 'comment'
  | 'string'
  | 'keyword'
  | 'boolean'
  | 'type'
  | 'function'
  | 'property'
  | 'number'
  | 'jsxTag'
  | 'operator'
  | 'punctuation'
  | 'code';

interface Token {
  text: string;
  kind: TokenKind;
}

const tokenizeLine = (line: string): Token[] => {
  const trimmed = line.trimStart();
  if (
    trimmed.startsWith('//') ||
    trimmed.startsWith('/*') ||
    trimmed.startsWith('*') ||
    trimmed.startsWith('#')
  ) {
    return [{ kind: 'comment', text: line }];
  }

  const tokens: Token[] = [];
  const re =
    /(\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[A-Za-z0-9_-]+|\/>|=>|===|!==|==|!=|<=|>=|[=+\-*/<>!&|?:]+|[{}()[\],;.]|\b\d+(?:\.\d+)?%?\b|[A-Za-z_$][\w$]*|\s+|[^\s\w"'`]+)/g;

  let match: RegExpExecArray | null;
  while ((match = re.exec(line)) !== null) {
    const text = match[0];
    const firstChar = text[0];

    if (text.startsWith('//')) {
      tokens.push({ kind: 'comment', text });
    } else if (firstChar === '"' || firstChar === "'" || firstChar === '`') {
      tokens.push({ kind: 'string', text });
    } else if (text.startsWith('<') || text === '/>') {
      tokens.push({ kind: 'jsxTag', text });
    } else if (/^\d+(?:\.\d+)?%?$/.test(text)) {
      tokens.push({ kind: 'number', text });
    } else if (KEYWORDS.has(text)) {
      tokens.push({ kind: 'keyword', text });
    } else if (BOOLEANS.has(text)) {
      tokens.push({ kind: 'boolean', text });
    } else if (REACT_HOOKS.has(text)) {
      tokens.push({ kind: 'function', text });
    } else if (BUILTIN_TYPES.has(text) || (/^[A-Z]/.test(text) && !KEYWORDS.has(text))) {
      tokens.push({ kind: 'type', text });
    } else if (/^[a-zA-Z_$][\w$]*$/.test(text)) {
      const rest = line.slice(match.index + text.length).trimStart();
      if (rest.startsWith('(')) {
        tokens.push({ kind: 'function', text });
      } else if (rest.startsWith(':') || rest.startsWith('=')) {
        tokens.push({ kind: 'property', text });
      } else {
        tokens.push({ kind: 'code', text });
      }
    } else if (/[=+\-*/<>!&|?]+/.test(text)) {
      tokens.push({ kind: 'operator', text });
    } else if (/[{}()[\],;.]/.test(text)) {
      tokens.push({ kind: 'punctuation', text });
    } else {
      tokens.push({ kind: 'code', text });
    }
  }
  return tokens;
};

const TOKEN_STYLES: Record<TokenKind, React.CSSProperties> = {
  comment: { color: '#94a3b8', fontStyle: 'italic' },
  keyword: { color: '#c084fc', fontWeight: 600 },
  boolean: { color: '#f87171', fontWeight: 600 },
  type: { color: '#38bdf8', fontWeight: 500 },
  function: { color: '#60a5fa' },
  property: { color: '#fde047' },
  string: { color: '#4ade80' },
  number: { color: '#fb923c' },
  jsxTag: { color: '#f43f5e', fontWeight: 600 },
  operator: { color: '#cbd5e1' },
  punctuation: { color: '#94a3b8' },
  code: { color: '#ffffff' },
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
  maxHeight,
  fontSize = 13.5,
  glassColor = '#080c16',
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
      {/* Component Styles & Responsive Media Queries */}
      <style>{`
        .glass-code-wrapper {
          position: relative;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .glass-code-aura {
          position: absolute;
          inset: -12px;
          background: radial-gradient(ellipse at 30% 20%, rgba(56, 189, 248, 0.22), transparent 55%),
                      radial-gradient(ellipse at 75% 80%, rgba(192, 132, 252, 0.18), transparent 50%);
          filter: blur(28px);
          border-radius: 24px;
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 640px) {
          .glass-code-aura {
            inset: 0;
            filter: blur(14px);
          }
        }

        .glass-code-frame {
          position: relative;
          z-index: 1;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 100%);
          border-radius: 16px;
          padding: 1px;
          box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08);
          box-sizing: border-box;
          overflow: hidden;
        }

        .glass-code-inner {
          border-radius: 15px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .glass-code-header {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 10px;
          padding: 10px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          min-height: 46px;
          box-sizing: border-box;
        }

        .glass-code-left {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          flex: 1;
        }

        .glass-traffic-lights {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
        }

        @media (max-width: 520px) {
          .glass-traffic-lights {
            display: none;
          }
        }

        .glass-tabs-nav {
          display: flex;
          align-items: center;
          gap: 6px;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          min-width: 0;
          flex: 1;
          padding: 2px 0;
        }

        .glass-tabs-nav::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .glass-tab-btn {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 6px;
          padding: 5px 11px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-family: ${FONT_MONO};
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.18s ease;
          user-select: none;
        }

        .glass-tab-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.07);
        }

        .glass-tab-btn.active {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .glass-tab-badge {
          font-size: 10px;
          padding: 1.5px 6px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.5);
          font-weight: normal;
          transition: all 0.18s ease;
        }

        .glass-tab-btn.active .glass-tab-badge {
          background: rgba(56, 189, 248, 0.22);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.35);
        }

        @media (max-width: 640px) {
          .glass-tab-badge {
            display: none;
          }
          .glass-tab-btn {
            padding: 5px 9px;
            font-size: 11.5px;
          }
        }

        .glass-copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.75);
          cursor: pointer;
          font-family: ${FONT_MONO};
          flex-shrink: 0;
          transition: all 0.18s ease;
          user-select: none;
        }

        .glass-copy-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.22);
        }

        .glass-copy-btn.copied {
          background: rgba(74, 222, 128, 0.15);
          border-color: rgba(74, 222, 128, 0.35);
          color: #4ade80;
        }

        @media (max-width: 440px) {
          .glass-copy-label {
            display: none;
          }
          .glass-copy-btn {
            padding: 6px 8px;
          }
        }

        .glass-code-body {
          position: relative;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-x: contain;
          padding: 20px 24px;
          font-family: ${FONT_MONO};
          line-height: 1.62;
          box-sizing: border-box;
        }

        .glass-code-body::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        @media (max-width: 640px) {
          .glass-code-body {
            padding: 13px 14px;
            font-size: 11.5px !important;
            line-height: 1.56 !important;
          }
        }

        .glass-code-line {
          display: flex;
          align-items: baseline;
          gap: 16px;
          white-space: pre;
          min-width: max-content;
        }

        @media (max-width: 640px) {
          .glass-code-line {
            gap: 10px;
          }
        }

        .glass-line-number {
          color: rgba(255, 255, 255, 0.28);
          user-select: none;
          font-size: 11px;
          width: 24px;
          text-align: right;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .glass-line-number {
            width: 18px;
            font-size: 10px;
            color: rgba(255, 255, 255, 0.22);
          }
        }

        .glass-line-content {
          flex: 1;
        }

        .glass-mobile-scroll-cue {
          display: none;
        }

        @media (max-width: 640px) {
          .glass-mobile-scroll-cue {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 5px;
            padding: 5px 14px 8px;
            font-size: 10px;
            color: rgba(255, 255, 255, 0.35);
            font-family: ${FONT_MONO};
            border-top: 1px solid rgba(255, 255, 255, 0.04);
            user-select: none;
          }
        }
      `}</style>

      {/* Background glowing aura */}
      <div className="glass-code-aura" aria-hidden="true" />

      {/* Main glass frame */}
      <div className="glass-code-frame">
        <div
          className="glass-code-inner"
          style={{
            background: glassColor,
          }}
        >
          {/* Header Chrome */}
          <div className="glass-code-header">
            <div className="glass-code-left">
              {showTrafficLights && (
                <div className="glass-traffic-lights" aria-hidden="true">
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: '50%',
                      background: '#ff5f57',
                      boxShadow: '0 0 6px rgba(255, 95, 87, 0.4)',
                    }}
                  />
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: '50%',
                      background: '#febc2e',
                      boxShadow: '0 0 6px rgba(254, 188, 46, 0.4)',
                    }}
                  />
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: '50%',
                      background: '#28c840',
                      boxShadow: '0 0 6px rgba(40, 200, 64, 0.4)',
                    }}
                  />
                </div>
              )}

              {/* Horizontally scrollable tabs */}
              <div className="glass-tabs-nav" role="tablist">
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`glass-tab-btn ${isActive ? 'active' : ''}`}
                    >
                      <Code2 size={12} style={{ opacity: isActive ? 1 : 0.6 }} />
                      <span>{tab.title}</span>
                      <span className="glass-tab-badge">{tab.badge}</span>
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
              aria-label="Kodu Panoya Kopyala"
              className={`glass-copy-btn ${copied ? 'copied' : ''}`}
            >
              {copied ? (
                <>
                  <Check size={12} color="#4ade80" />
                  <span className="glass-copy-label">Kopyalandı</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span className="glass-copy-label">Kopyala</span>
                </>
              )}
            </button>
          </div>

          {/* Code Body */}
          <div
            className="glass-code-body glass-code-scroll"
            style={{
              fontSize,
              maxHeight: maxHeight || undefined,
            }}
          >
            {lines.map((line, i) => {
              const tokens = tokenizeLine(line);
              return (
                <div key={`${activeTab.id}-${i}`} className="glass-code-line">
                  <span className="glass-line-number">{i + 1}</span>
                  <span className="glass-line-content">
                    {tokens.length === 0 ? (
                      <span style={{ display: 'inline-block', width: '1px' }}>&nbsp;</span>
                    ) : (
                      tokens.map((token, j) => (
                        <span key={j} style={TOKEN_STYLES[token.kind]}>
                          {token.text}
                        </span>
                      ))
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile swipe helper */}
          <div className="glass-mobile-scroll-cue" aria-hidden="true">
            <span>⇄ Yatay kaydırarak inceleyebilirsiniz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCodeBlock;
