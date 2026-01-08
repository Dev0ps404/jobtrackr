import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function DashboardTopbar() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail");
  const userPhoto = localStorage.getItem("userPhoto");

  const [open, setOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "64px",
        background: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
      }}
    >
      <h3>Dashboard</h3>

      <div ref={ref} style={{ position: "relative" }}>
        <div
          onClick={() => setOpen(!open)}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            cursor: "pointer",
            overflow: "hidden",
            background: "#20c997",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          {userPhoto && !photoError ? (
            <img
              src={userPhoto}
              onError={() => setPhotoError(true)}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            userName.charAt(0).toUpperCase()
          )}
        </div>

        {open && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "48px",
              width: "220px",
              background: "#ffffff",
              borderRadius: "14px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              padding: "12px",
              zIndex: 9999, // 🔥 VERY IMPORTANT
            }}
          >
            <strong>{userName}</strong>
            <p style={{ fontSize: "13px", color: "#64748b" }}>{userEmail}</p>
            <button
              onClick={() => navigate("/profile")}
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                background: "#f1f5f9",
                cursor: "pointer",
              }}
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                background: "#fee2e2",
                color: "#b91c1c",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardTopbar;
