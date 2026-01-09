function DashboardKanban({ jobs = [] }) {
  const selected = jobs.filter((j) => j.status === "Selected");
  const applied = jobs.filter((j) => j.status === "Applied");
  const interview = jobs.filter((j) => j.status === "Interview");

  return (
    <div style={grid}>
      <Column title="Selected" color="#22c55e">
        {selected.map((j) => (
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
  <div
    style={{
      ...card,
      transition: "all 0.3s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
      e.currentTarget.style.boxShadow = "0 20px 50px rgba(2,6,23,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
    }}
  >
    <strong>{job.companyName}</strong>
    <p style={{ fontSize: "14px", color: "#475569", marginTop: "4px" }}>
      {job.role}
    </p>
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
