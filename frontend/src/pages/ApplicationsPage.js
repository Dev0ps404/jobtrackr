import React from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

function ApplicationsPage({ jobs = [], refresh }) {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        All Applications
      </h1>

      <JobForm refresh={refresh} />

      <h2 style={{ margin: "30px 0 16px" }}>Your Applications</h2>

      <JobList jobs={jobs} refresh={refresh} />
    </div>
  );
}

export default ApplicationsPage;
