import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./utils/api";

import Dashboard from "./pages/Dashboard";
import ApplicationsPage from "./pages/ApplicationsPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/applications");
      setJobs(res.data);
    } catch (err) {
      console.error("Fetch failed");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard jobs={jobs} />} />

      <Route
        path="/applications"
        element={<ApplicationsPage jobs={jobs} refresh={fetchJobs} />}
      />

      <Route path="/analytics" element={<AnalyticsPage jobs={jobs} />} />

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;
