import React from "react";
import { useEffect, useState } from "react";

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value);
    const duration = 500;
    const step = Math.max(1, Math.floor(end / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 20);

    return () => clearInterval(timer);
  }, [value]);

  return count;
}

function DashboardCards() {
  return (
    <div style={grid}>
      <Card
        title="Applications"
        value="24"
        icon="📄"
        sub="+3 this week"
        accent="#20c997"
        bg="linear-gradient(135deg, #e6faf6, #ffffff)"
      />
      <Card
        title="Interviews"
        value="6"
        icon="🎤"
        sub="2 upcoming"
        accent="#3b82f6"
        bg="linear-gradient(135deg, #eff6ff, #ffffff)"
      />
      <Card
        title="Offers"
        value="2"
        icon="🎉"
        sub="1 pending"
        accent="#f59e0b"
        bg="linear-gradient(135deg, #fff7ed, #ffffff)"
      />
      <Card
        title="Rejected"
        value="4"
        icon="❌"
        sub="Keep trying"
        accent="#ef4444"
        bg="linear-gradient(135deg, #fef2f2, #ffffff)"
      />
    </div>
  );
}

const Card = ({ title, value, icon, sub, accent, bg }) => (
  <div
    style={{
      ...card,
      background: bg,
      borderTop: `4px solid ${accent}`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 30px 80px rgba(2,6,23,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 20px 50px rgba(2,6,23,0.08)";
    }}
  >
    {/* TOP */}
    <div style={cardTop}>
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          background: accent,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        {icon}
      </div>

      <h4 style={{ margin: 0, color: "#475569", fontWeight: 600 }}>{title}</h4>
    </div>

    {/* VALUE */}
    <h2 style={cardValue}>
      <AnimatedNumber value={value} />
    </h2>

    {/* SUB TEXT */}
    <p style={cardSub}>{sub}</p>
  </div>
);

/* ===== STYLES ===== */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "24px",
};

const card = {
  padding: "28px",
  borderRadius: "22px",
  boxShadow: "0 20px 50px rgba(2,6,23,0.08)",
  transition: "all 0.35s ease",
  cursor: "pointer",
};

const cardTop = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "20px",
};

const cardValue = {
  fontSize: "44px",
  fontWeight: 800,
  margin: "0 0 6px",
};

const cardSub = {
  fontSize: "14px",
  color: "#64748b",
};

export default DashboardCards;
