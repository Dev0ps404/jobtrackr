import React from "react";

function Stats({ jobs }) {
  const count = (status) =>
    jobs.filter((j) => j.status === status).length;

  const Card = ({ title, value, color }) => (
    <div className="card" style={{ textAlign: "center" }}>
      <p style={{ marginBottom: "10px", fontWeight: 600 }}>
        {title}
      </p>
      <h1 style={{ color }}>{value}</h1>
    </div>
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "24px",
        marginBottom: "40px",
      }}
    >
      <Card title="Total" value={jobs.length} color="#0f172a" />
      <Card title="Applied" value={count("Applied")} color="#6366f1" />
      <Card title="Interview" value={count("Interview")} color="#f59e0b" />
      <Card title="Selected" value={count("Selected")} color="#16a34a" />
      <Card title="Rejected" value={count("Rejected")} color="#dc2626" />
    </div>
  );
}

export default Stats;
