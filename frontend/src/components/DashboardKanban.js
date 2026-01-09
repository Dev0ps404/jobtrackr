function DashboardKanban({ jobs = [] }) {
  const wishlist = jobs.filter((j) => j.status === "Wishlist");
  const applied = jobs.filter((j) => j.status === "Applied");
  const interview = jobs.filter((j) => j.status === "Interview");

  return (
    <div style={grid}>
      <Column title="Wishlist" color="#64748b">
        {wishlist.map((j) => (
          <Card key={j._id} job={j} />
        ))}
      </Column>

      <Column title="Applied" color="#3b82f6">
        {applied.map((j) => (
          <Card key={j._id} job={j} />
        ))}
      </Column>

      <Column title="Interview" color="#20c997">
        {interview.map((j) => (
          <Card key={j._id} job={j} />
        ))}
      </Column>
    </div>
  );
}

const Column = ({ title, color, children }) => (
  <div style={column}>
    <div style={header}>
      <span style={{ ...dot, background: color }} />
      <h4>{title}</h4>
    </div>
    {children}
  </div>
);

const Card = ({ job }) => (
  <div style={card}>
    <strong>{job.companyName}</strong>
    <p style={{ fontSize: "14px", color: "#475569" }}>{job.role}</p>
  </div>
);

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
};

const column = {
  background: "#f8fafc",
  padding: "16px",
  borderRadius: "20px",
};

const header = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "16px",
};

const dot = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
};

const card = {
  background: "#fff",
  padding: "16px",
  borderRadius: "14px",
  marginBottom: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

export default DashboardKanban;
