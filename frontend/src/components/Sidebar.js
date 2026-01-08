import React, { useState } from "react";
import {
  FiGrid,
  FiBriefcase,
  FiBarChart2,
  FiUser,
  FiInfo,
  FiMoon,
  FiSun,
} from "react-icons/fi";

function Sidebar({ current, setCurrent }) {
  const [dark, setDark] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark-mode");
  };

  const item = (name) => ({
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px 18px",
    borderRadius: "14px",
    marginBottom: "8px",
    cursor: "pointer",
    background:
      current === name ? "rgba(99,102,241,0.12)" : "transparent",
    color: current === name ? "#4f46e5" : "#334155",
    fontWeight: current === name ? 600 : 500,
    transition: "all 0.25s ease",
  });

  return (
    <>
      <div
        style={{
          width: "280px",
          background: "#ffffff",
          padding: "28px 20px",
          borderRight: "1px solid #e2e8f0",
          minHeight: "100vh",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
            fontWeight: 800,
            color: "#4f46e5",
          }}
        >
          JobTrackr
        </h2>

        <div style={item("dashboard")} onClick={() => setCurrent("dashboard")}>
          <FiGrid /> Dashboard
        </div>

        <div
          style={item("applications")}
          onClick={() => setCurrent("applications")}
        >
          <FiBriefcase /> Applications
        </div>

        <div style={item("analytics")} onClick={() => setCurrent("analytics")}>
          <FiBarChart2 /> Analytics
        </div>

        <div style={item("profile")} onClick={() => setCurrent("profile")}>
          <FiUser /> Profile
        </div>

        <div style={{ marginTop: "30px", borderTop: "1px solid #e2e8f0" }} />

        <div
          style={{ ...item("about"), marginTop: "20px" }}
          onClick={() => setShowAbout(true)}
        >
          <FiInfo /> About
        </div>

        <div
          onClick={toggleTheme}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "20px",
            cursor: "pointer",
            fontWeight: 600,
            color: "#0f172a",
          }}
        >
          {dark ? <FiSun /> : <FiMoon />}
          {dark ? "Light Mode" : "Dark Mode"}
        </div>
      </div>

      {showAbout && (
        <div
          onClick={() => setShowAbout(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="card"
            style={{ width: "420px", cursor: "default" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>About JobTrackr</h2>
            <p style={{ marginTop: "10px" }}>
              JobTrackr is a professional job application management system
              designed to track applications, interviews, and outcomes with
              analytics and insights.
            </p>
            <button
              style={{ marginTop: "20px" }}
              onClick={() => setShowAbout(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
