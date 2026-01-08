import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: `
          linear-gradient(#e2e8f0 1px, transparent 1px),
          linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
          radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 35%),
          #f8fafc
        `,
        backgroundSize: "32px 32px",
      }}
    >
      {/* HEADER */}
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
          <h1 style={{ margin: 0 }}>Settings</h1>
          <p style={{ margin: 0, color: "#64748b" }}>
            Manage preferences & account
          </p>
        </div>

        <button onClick={() => navigate("/dashboard")} style={backBtn}>
          ← Back to Dashboard
        </button>
      </div>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
      >
        {/* ACCOUNT */}
        <Card title="Account">
          <Row label="Email">{userEmail}</Row>
          <Row label="Login Method">Google / Email</Row>
        </Card>

        {/* PREFERENCES */}
        <Card title="Preferences">
          <Row label="Theme">Light</Row>
          <Row label="Notifications">Enabled</Row>
        </Card>
      </div>
    </div>
  );
}

/* ===== SMALL COMPONENTS ===== */

const Card = ({ title, children }) => (
  <div
    style={{
      background: "#ffffff",
      padding: "28px",
      borderRadius: "24px",
      boxShadow: "0 30px 80px rgba(2,6,23,0.12)",
    }}
  >
    <h3 style={{ marginBottom: "16px" }}>{title}</h3>
    <div style={{ display: "grid", gap: "14px" }}>{children}</div>
  </div>
);

const Row = ({ label, children }) => (
  <div>
    <p style={{ margin: 0, fontSize: "13px", color: "#64748b" }}>{label}</p>
    <div
      style={{
        marginTop: "6px",
        padding: "10px 14px",
        borderRadius: "10px",
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  </div>
);

const backBtn = {
  padding: "8px 16px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  background: "#ffffff",
  cursor: "pointer",
  fontWeight: 500,
};

export default Settings;
