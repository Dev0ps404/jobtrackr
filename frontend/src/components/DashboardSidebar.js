import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DashboardSidebar({ collapsed, onToggle }) {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail");
  const userPhoto = localStorage.getItem("userPhoto");

  const [photoError, setPhotoError] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  /* ===== NAV ITEM ===== */
  const NavItem = ({ name, icon, route }) => (
    <div
      onClick={() => navigate(route)}
      onMouseEnter={() => setHovered(name)}
      onMouseLeave={() => setHovered(null)}
      style={{
        position: "relative",
        cursor: "pointer",
        padding: "10px 14px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "flex-start",
        gap: collapsed ? 0 : "12px",
        fontWeight: 500,
        color: "#475569",
        transition: "all 0.25s ease",
        background:
          hovered === name && !collapsed
            ? "rgba(32,201,151,0.12)"
            : "transparent",
        transform:
          hovered === name && !collapsed ? "translateX(4px)" : "translateX(0)",
      }}
    >
      {/* ICON */}
      <span
        style={{
          fontSize: "18px",
          transition: "transform 0.25s ease",
          transform: hovered === name ? "scale(1.15)" : "scale(1)",
        }}
      >
        {icon}
      </span>

      {!collapsed && name}

      {/* TOOLTIP */}
      {collapsed && hovered === name && (
        <div
          style={{
            position: "absolute",
            left: "72px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#020617",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "8px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            animation: "tooltipIn 0.2s ease",
            zIndex: 200,
          }}
        >
          {name}
        </div>
      )}
    </div>
  );

  return (
    <aside
      style={{
        width: collapsed ? "90px" : "260px",
        transition: "width 0.35s cubic-bezier(.4,0,.2,1)",
        background: "#ffffff",
        borderRight: "1px solid #e2e8f0",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* ===== TOP ===== */}
      <div>
        {/* LOGO + TOGGLE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "space-between",
            marginBottom: "28px",
          }}
        >
          {!collapsed && (
            <img
              src="/logo.png"
              alt="JobTrackr"
              style={{
                height: "40px",
                animation: "fadeIn 0.4s ease",
              }}
            />
          )}

          <button
            onClick={onToggle}
            style={{
              border: "none",
              background: "#f1f5f9",
              borderRadius: "10px",
              padding: "6px 10px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {collapsed ? "▶" : "◀"}
          </button>
        </div>

        {/* NAV */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <NavItem name="Dashboard" icon="📊" route="/dashboard" />
          <NavItem name="Applications" icon="📁" route="/applications" />
          <NavItem name="Analytics" icon="📈" route="/analytics" />
          <NavItem name="Settings" icon="⚙️" route="/settings" />
        </nav>
      </div>

      {/* ===== MINI USER CARD ===== */}
      <div
        style={{
          padding: "12px",
          borderRadius: "16px",
          background: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          gap: "10px",
          transition: "transform 0.25s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-2px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        {userPhoto && !photoError ? (
          <img
            src={userPhoto}
            alt="profile"
            onError={() => setPhotoError(true)}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "#20c997",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            {userName.charAt(0).toUpperCase()}
          </div>
        )}

        {!collapsed && (
          <>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: "14px" }}>{userName}</strong>
              <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
                {userEmail}
              </p>
            </div>

            <button
              onClick={handleLogout}
              style={{
                border: "none",
                background: "transparent",
                color: "#ef4444",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              ⎋
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

export default DashboardSidebar;
