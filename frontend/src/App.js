import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./utils/api";

/* Pages */
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AnalyticsPage from "./pages/AnalyticsPage";
import ApplicationsPage from "./pages/ApplicationsPage";

/* Layout */
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/applications");
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch applications");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Routes>
      {/* LANDING */}
      <Route path="/" element={<LandingPage />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* DASHBOARD */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/applications"
          element={<ApplicationsPage jobs={jobs} refresh={fetchJobs} />}
        />

        <Route path="/analytics" element={<AnalyticsPage jobs={jobs} />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
