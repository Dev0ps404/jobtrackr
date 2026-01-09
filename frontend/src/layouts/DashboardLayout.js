import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import DashboardSidebar from "../components/DashboardSidebar";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  // ✅ STEP 6 — MOBILE DETECTION
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true); // mobile → sidebar collapsed
      } else {
        setCollapsed(false); // desktop → sidebar open
      }
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      {/* SIDEBAR */}
      <DashboardSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          padding: "24px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
