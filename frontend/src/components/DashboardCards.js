import React, { useEffect, useState } from "react";

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value);
    const step = Math.max(1, Math.floor(end / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [value]);

  return count;
}

function DashboardCards({ jobs = [], loading }) {
  const total = jobs.length;
  const interviews = jobs.filter((j) => j.status === "Interview").length;
  const selected = jobs.filter((j) => j.status === "Selected").length;
  const rejected = jobs.filter((j) => j.status === "Rejected").length;

  return (
    <div style={grid}>
      <Card title="Applications" value={total} icon="📄" accent="#20c997" />
      <Card title="Interviews" value={interviews} icon="🎤" accent="#3b82f6" />
      <Card title="Selected" value={selected} icon="🎉" accent="#f59e0b" />
      <Card title="Rejected" value={rejected} icon="❌" accent="#ef4444" />
    </div>
  );
}

const Card = ({ title, value, icon, accent }) => (
  <div
    style={{
      ...card,
      borderTop: `5px solid ${accent}`,
      transition: "all 0.35s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
      e.currentTarget.style.boxShadow = "0 30px 80px rgba(2,6,23,0.18)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)";
    }}
  >
    <div style={top}>
      <span
        style={{
          fontSize: "22px",
          transition: "transform 0.3s ease",
        }}
      >
        {icon}
      </span>
      <h4>{title}</h4>
    </div>

    <h2>
      <AnimatedNumber value={value} />
    </h2>
  </div>
);

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "24px",
  marginBottom: "40px",
};

const card = {
  background: "#fff",
  padding: "24px",
  borderRadius: "18px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
};

const top = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

export default DashboardCards;
