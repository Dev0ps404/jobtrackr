import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardTopbar from "../components/DashboardTopbar";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: `
          linear-gradient(#e2e8f0 1px, transparent 1px),
          linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
          #f8fafc
        `,
        backgroundSize: "32px 32px",
      }}
    >
      {/* SIDEBAR ALWAYS FIXED */}
      <DashboardSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, position: "relative" }}>
        <DashboardTopbar />

        <div style={{ padding: "32px" }}>
          <Outlet /> {/* 👈 YAHAN PAGE CHANGE HOGA */}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
