import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardTopbar from "../components/DashboardTopbar";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true); // ✅ NEW
  const navigate = useNavigate();
  const location = useLocation();

  /* ✅ AUTH GUARD — FIXED */
  useEffect(() => {
    const protectedRoutes = [
      "/dashboard",
      "/applications",
      "/analytics",
      "/profile",
      "/settings",
    ];

    const isProtectedRoute = protectedRoutes.some((route) =>
      location.pathname.startsWith(route)
    );

    const token = localStorage.getItem("token");

    if (isProtectedRoute && !token) {
      navigate("/login");
    } else {
      setCheckingAuth(false); // ✅ auth verified
    }
  }, [location.pathname, navigate]);

  // ✅ IMPORTANT: wait until auth check finishes
  if (checkingAuth) return null;

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
      <DashboardSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      <div style={{ flex: 1, position: "relative" }}>
        <DashboardTopbar />

        <div style={{ padding: "32px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
