import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail");
  const userPhoto = localStorage.getItem("userPhoto");

  const [photoError, setPhotoError] = useState(false);

  /* ✅ ONLY REQUIRED useEffect (AUTH GUARD) */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: `
          linear-gradient(#e2e8f0 1px, transparent 1px),
          linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
          radial-gradient(circle at top right, rgba(32,201,151,0.15), transparent 35%),
          #f8fafc
        `,
        backgroundSize: "32px 32px",
      }}
    >
      {/* ===== HEADER ===== */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Profile</h1>
          <p style={{ margin: 0, color: "#64748b" }}>
            Manage your account information
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "8px 16px",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
            background: "#ffffff",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* ===== PROFILE CARD ===== */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: "32px",
        }}
      >
        {/* LEFT CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 30px 80px rgba(2,6,23,0.15)",
            textAlign: "center",
          }}
        >
          {/* AVATAR */}
          {userPhoto && !photoError ? (
            <img
              src={userPhoto}
              alt="profile"
              onError={() => setPhotoError(true)}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "16px",
              }}
            />
          ) : (
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "#20c997",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: 700,
                margin: "0 auto 16px",
              }}
            >
              {userName.charAt(0).toUpperCase()}
            </div>
          )}

          <h2 style={{ marginBottom: "4px" }}>{userName}</h2>
          <p style={{ color: "#64748b", marginBottom: "20px" }}>{userEmail}</p>

          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "10px",
              background: "#ef4444",
              color: "#ffffff",
              border: "none",
              borderRadius: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {/* RIGHT DETAILS */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 30px 80px rgba(2,6,23,0.12)",
          }}
        >
          <h3 style={{ marginBottom: "16px" }}>Account Details</h3>

          <div style={{ display: "grid", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "13px", color: "#64748b" }}>
                Full Name
              </label>
              <div style={field}>{userName}</div>
            </div>

            <div>
              <label style={{ fontSize: "13px", color: "#64748b" }}>
                Email Address
              </label>
              <div style={field}>{userEmail}</div>
            </div>

            <div>
              <label style={{ fontSize: "13px", color: "#64748b" }}>
                Login Method
              </label>
              <div style={field}>
                {userPhoto ? "Google Login" : "Email Login"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const field = {
  marginTop: "6px",
  padding: "10px 14px",
  borderRadius: "10px",
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  fontWeight: 500,
};

export default Profile;
