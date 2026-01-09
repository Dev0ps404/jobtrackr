import React from "react";
import API from "../utils/api";

function JobList({ jobs = [], refresh }) {
  const updateStatus = async (id, status) => {
    await API.put(`/applications/${id}`, { status });
    refresh();
  };

  const deleteJob = async (id) => {
    await API.delete(`/applications/${id}`);
    refresh();
  };

  return (
    <>
      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "14px",
            marginBottom: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            borderLeft: "6px solid #22c55e",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ margin: 0 }}>{job.companyName}</h3>
              <p style={{ margin: "4px 0", color: "#475569" }}>{job.role}</p>

              <p style={{ fontSize: "14px" }}>
                <strong>Priority:</strong> {job.priority} &nbsp; | &nbsp;
                <strong>Deadline:</strong>{" "}
                {job.deadline
                  ? new Date(job.deadline).toLocaleDateString()
                  : "-"}
              </p>
            </div>

            <span style={{ color: "#2563eb" }}>{job.status}</span>
          </div>

          <div style={{ marginTop: "10px" }}>
            <select
              value={job.status}
              onChange={(e) => updateStatus(job._id, e.target.value)}
              style={{ padding: "6px" }}
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Selected</option>
              <option>Rejected</option>
            </select>

            <button
              onClick={() => deleteJob(job._id)}
              style={{
                marginLeft: "12px",
                padding: "6px 14px",
                background: "#ef4444",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default JobList;
