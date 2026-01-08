import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* 🔥 ROOT FIX */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      {/* 🔥 ALL SIDEBAR PAGES */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
