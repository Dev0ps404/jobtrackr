import { useEffect, useState } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import api from "../utils/api";

function ApplicationsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Fetch all applications
  const fetchJobs = async () => {
    try {
      const res = await api.get("/applications");
      setJobs(res.data);
    } catch (err) {
      alert("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchJobs();
  }, []);

  // Refresh callback (used by JobForm / JobList)
  const refresh = () => {
    fetchJobs();
  };

  if (loading) {
    return <p>Loading applications...</p>;
  }

  return (
    <>
      <h1>All Applications</h1>

      {/* ADD JOB FORM */}
      <JobForm refresh={refresh} />

      {/* JOB LIST */}
      <JobList jobs={jobs} refresh={refresh} />
    </>
  );
}

export default ApplicationsPage;
