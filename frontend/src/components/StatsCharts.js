export default function StatsCharts() {
  const stats = [
    { label: "Applied", value: 12 },
    { label: "Interview", value: 4 },
    { label: "Offers", value: 1 },
    { label: "Rejected", value: 3 },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
      {stats.map(s => (
        <div
          key={s.label}
          style={{
            background: "var(--bg-card)",
            padding: 24,
            borderRadius: 16,
            textAlign: "center",
          }}
        >
          <h2>{s.value}</h2>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
