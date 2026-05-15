export default function VisionContext({ visible, onContinue, onDismiss }) {
  if (!visible) {
    return null;
  }

  return (
    <section
      style={{
        background: 'var(--bg)',
        border: '1px solid var(--rule)',
        borderRadius: 4,
        padding: 20,
        marginBottom: 28,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
        <span style={{ color: 'var(--gold)', fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>§ 00</span>
        <h3 style={{ margin: 0, fontFamily: "'Source Serif 4', serif", fontSize: 30, color: 'var(--ink)' }}>What you are looking at</h3>
      </div>
      <div style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 16 }}>
        The Sanko 2030 platform vision.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 16, marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 14, color: 'var(--muted)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Today (May 2026)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 16, color: 'var(--ink-soft)' }}>
            <div>Sanko Vault MVP in development</div>
            <div>HTSN partnership confirmed</div>
            <div>Yemkem clinic as pilot site</div>
          </div>
        </div>

        <div style={{ background: 'var(--rule-soft)' }} />

        <div>
          <div style={{ fontSize: 14, color: 'var(--muted)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>2030 (shown below)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 16, color: 'var(--ink-soft)' }}>
            <div>Four-persona platform</div>
            <div>3 countries active · 6+ targeted</div>
            <div>141,000 tracked outcomes</div>
            <div>Pharmacovigilance system</div>
            <div>Tiered ABS data access</div>
          </div>
        </div>
      </div>

      <div style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 14 }}>
        This demonstration shows the system Sanko is designed to become, not what currently exists. Numbers and dashboards are illustrative of the 2030 vision.
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={onContinue}
          style={{
            border: '1px solid var(--ink)',
            borderRadius: 4,
            background: 'var(--bg)',
            color: 'var(--ink)',
            fontSize: 14,
            fontWeight: 600,
            padding: '8px 12px',
            cursor: 'pointer',
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Continue to vision →
        </button>

        <button
          type="button"
          onClick={onDismiss}
          style={{
            border: 'none',
            borderBottom: '1px solid var(--ink-soft)',
            background: 'transparent',
            color: 'var(--ink-soft)',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            padding: 0,
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Dismiss
        </button>
      </div>
    </section>
  );
}
