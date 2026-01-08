import React from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

function ApplicationsPage({ jobs, refresh }) {
  return (
    <>
      <h1>All Applications</h1>
      <JobForm refresh={refresh} />
      <JobList jobs={jobs} refresh={refresh} />
    </>
  );
}

export default ApplicationsPage;
