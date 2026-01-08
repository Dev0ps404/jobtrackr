const columns = ["Applied", "Interview", "Offer", "Rejected"];

export default function KanbanBoard() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 40 }}>
      {columns.map(col => (
        <div
          key={col}
          style={{
            background: "var(--bg-card)",
            padding: 16,
            borderRadius: 16,
          }}
        >
          <h3>{col}</h3>
          <div style={{ marginTop: 10, padding: 10, background: "var(--bg-main)", borderRadius: 10 }}>
            Frontend Developer
          </div>
        </div>
      ))}
    </div>
  );
}
