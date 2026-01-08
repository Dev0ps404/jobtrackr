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

const COLORS = ["#1976d2", "#f9a825", "#388e3c", "#d32f2f"];

function AnalyticsPage({ jobs = [] }) {
  // Status-wise count
  const statusMap = {};
  jobs.forEach((j) => {
    statusMap[j.status] = (statusMap[j.status] || 0) + 1;
  });
  const statusData = Object.keys(statusMap).map((k) => ({
    name: k,
    value: statusMap[k],
  }));

  // Priority-wise count
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

  return (
    <div>
      <h1>Analytics</h1>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {/* Status Pie */}
        <div style={{ width: "400px", height: "300px" }}>
          <h3>Status Distribution</h3>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={statusData} dataKey="value" nameKey="name" outerRadius={100}>
                {statusData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Priority Bar */}
        <div style={{ width: "400px", height: "300px" }}>
          <h3>Priority Distribution</h3>
          <ResponsiveContainer>
            <BarChart data={priorityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
