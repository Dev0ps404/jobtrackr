import React from "react";

function Navbar() {
  return (
    <div
      style={{
        height: "64px",
        background: "#131921", // Amazon dark
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
      }}
    >
      {/* LEFT: LOGO */}
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>
        Job<span style={{ color: "#f08804" }}>Trackr</span>
      </div>

      {/* CENTER: NAV LINKS */}
      <div style={{ display: "flex", gap: "20px" }}>
        <span style={{ cursor: "pointer" }}>Dashboard</span>
        <span style={{ cursor: "pointer" }}>Applications</span>
        <span style={{ cursor: "pointer" }}>Analytics</span>
      </div>

      {/* CENTER SEARCH */}
      <input
        placeholder="Search jobs..."
        style={{
          width: "280px",
          padding: "6px 10px",
          borderRadius: "4px",
          border: "none",
          outline: "none",
        }}
      />

      {/* RIGHT: USER + LOGOUT */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span>Hi, User</span>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
          style={{
            background: "#f08804",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
