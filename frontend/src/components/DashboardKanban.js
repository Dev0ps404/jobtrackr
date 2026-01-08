function DashboardKanban() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
      }}
    >
      <KanbanColumn title="Wishlist" color="#64748b">
        <KanbanCard company="Google" role="Frontend Engineer" />
        <KanbanCard company="Amazon" role="SDE I" />
      </KanbanColumn>

      <KanbanColumn title="Applied" color="#3b82f6">
        <KanbanCard company="Meta" role="React Developer" />
        <KanbanCard company="Netflix" role="UI Engineer" />
      </KanbanColumn>

      <KanbanColumn title="Interview" color="#20c997">
        <KanbanCard company="Microsoft" role="UI Developer" />
      </KanbanColumn>
    </div>
  );
}

function KanbanColumn({ title, color, children }) {
  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "16px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(2,6,23,0.05)",
      }}
    >
      {/* COLUMN HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: color,
          }}
        />
        <h4 style={{ margin: 0 }}>{title}</h4>
      </div>

      {children}
    </div>
  );
}

function KanbanCard({ company, role }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "16px",
        borderRadius: "14px",
        marginBottom: "12px",
        boxShadow: "0 8px 24px rgba(2,6,23,0.08)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 50px rgba(2,6,23,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(2,6,23,0.08)";
      }}
    >
      <strong>{company}</strong>
      <p
        style={{
          fontSize: "14px",
          color: "#475569",
          marginTop: "4px",
        }}
      >
        {role}
      </p>
    </div>
  );
}

export default DashboardKanban;
