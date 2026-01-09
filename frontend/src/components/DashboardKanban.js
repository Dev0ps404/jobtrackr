function DashboardKanban({ jobs = [] }) {
  const wishlist = jobs.filter((j) => j.status === "Wishlist");
  const applied = jobs.filter((j) => j.status === "Applied");
  const interview = jobs.filter((j) => j.status === "Interview");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
      }}
    >
      <KanbanColumn title="Wishlist" color="#64748b">
        {wishlist.map((job) => (
          <KanbanCard key={job._id} company={job.companyName} role={job.role} />
        ))}
      </KanbanColumn>

      <KanbanColumn title="Applied" color="#3b82f6">
        {applied.map((job) => (
          <KanbanCard key={job._id} company={job.companyName} role={job.role} />
        ))}
      </KanbanColumn>

      <KanbanColumn title="Interview" color="#20c997">
        {interview.map((job) => (
          <KanbanCard key={job._id} company={job.companyName} role={job.role} />
        ))}
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
