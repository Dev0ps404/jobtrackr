import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#2563eb", "#f59e0b", "#16a34a", "#dc2626"];

function AnalyticsPage({ jobs = [] }) {
  /* ---------- Status-wise count ---------- */
  const statusMap = {};
  jobs.forEach((j) => {
    if (j.status) {
      statusMap[j.status] = (statusMap[j.status] || 0) + 1;
    }
  });
  const statusData = Object.keys(statusMap).map((k) => ({
    name: k,
    value: statusMap[k],
  }));

  /* ---------- Priority-wise count ---------- */
  const priorityMap = {};
  jobs.forEach((j) => {
    if (j.priority) {
      priorityMap[j.priority] = (priorityMap[j.priority] || 0) + 1;
    }
  });
  const priorityData = Object.keys(priorityMap).map((k) => ({
    name: k,
    value: priorityMap[k],
  }));

  const totalApplications = jobs.length;

  return (
    <div>
      {/* HEADER */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ margin: 0, fontSize: "32px" }}>Analytics</h1>
        <p style={{ color: "#64748b", marginTop: "6px" }}>
          Insights from your job applications
        </p>
      </div>

      {/* TOP STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "36px",
        }}
      >
        <StatCard
          title="Total Applications"
          value={totalApplications}
          color="#2563eb"
        />
        <StatCard
          title="Interviews"
          value={statusMap.Interview || 0}
          color="#f59e0b"
        />
        <StatCard
          title="Selected"
          value={statusMap.Selected || 0}
          color="#16a34a"
        />
        <StatCard
          title="Rejected"
          value={statusMap.Rejected || 0}
          color="#dc2626"
        />
      </div>

      {/* CHARTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "28px",
        }}
      >
        {/* STATUS PIE */}
        <Card title="Application Status">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                innerRadius={60}
              >
                {statusData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* PRIORITY BAR */}
        <Card title="Priority Distribution">
          <ResponsiveContainer width="50%" height={280}>
            <BarChart data={priorityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#114becff" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}

/* ---------- UI COMPONENTS ---------- */

const Card = ({ title, children }) => (
  <div
    style={{
      background: "#ffffff",
      borderRadius: "20px",
      padding: "24px",
      boxShadow: "0 20px 40px rgba(2,6,23,0.1)",
      border: "1px solid #e5e7eb",
      transition: "all 0.35s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
      e.currentTarget.style.boxShadow = "0 30px 80px rgba(2,6,23,0.18)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgba(2,6,23,0.1)";
    }}
  >
    <h3 style={{ marginBottom: "16px" }}>{title}</h3>
    {children}
  </div>
);

const StatCard = ({ title, value, color }) => (
  <div
    style={{
      background: "linear-gradient(180deg, #ffffff, #f8fafc)",
      borderRadius: "18px",
      padding: "22px",
      boxShadow: "0 16px 32px rgba(2,6,23,0.08)",
      borderLeft: `6px solid ${color}`,
      transition: "all 0.35s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 26px 60px rgba(2,6,23,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 16px 32px rgba(2,6,23,0.08)";
    }}
  >
    <p style={{ color: "#64748b", marginBottom: "6px" }}>{title}</p>
    <h2 style={{ margin: 0, fontSize: "34px" }}>{value}</h2>
  </div>
);

export default AnalyticsPage;
