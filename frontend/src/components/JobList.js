import React from "react";
import API from "../services/api";

/* ---------- Deadline Highlight ---------- */
const getDeadlineStyle = (deadline) => {
  if (!deadline) return {};

  const today = new Date();
  const dueDate = new Date(deadline);
  const diffDays = Math.ceil(
    (dueDate - today) / (1000 * 60 * 60 * 24)
  );

  if (diffDays < 0) return { borderLeft: "6px solid #d32f2f" };
  if (diffDays <= 3) return { borderLeft: "6px solid #f9a825" };
  return { borderLeft: "6px solid #388e3c" };
};

/* ---------- Priority Color ---------- */
const getPriorityStyle = (priority) => {
  if (priority === "High") return { color: "#d32f2f" };
  if (priority === "Medium") return { color: "#f9a825" };
  return { color: "#388e3c" };
};

function JobList({ jobs, refresh }) {
  const updateStatus = async (id, status) => {
    await API.put(`/applications/${id}`, { status });
    refresh();
  };

  const deleteJob = async (id) => {
    await API.delete(`/applications/${id}`);
    refresh();
  };

  return (
    <div>
      <h2>Your Applications</h2>

      {jobs.length === 0 && <p>No applications found.</p>}

      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            background: "#ffffff",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            ...getDeadlineStyle(job.deadline),
          }}
        >
          <h3>{job.companyName}</h3>
          <p>{job.role}</p>

          <p>
            <strong>Status:</strong> {job.status}
          </p>

          {job.priority && (
            <p>
              <strong>Priority:</strong>{" "}
              <span style={getPriorityStyle(job.priority)}>
                {job.priority}
              </span>
            </p>
          )}

          {job.deadline && (
            <p>
              <strong>Deadline:</strong>{" "}
              {new Date(job.deadline).toLocaleDateString()}
            </p>
          )}

          <select
            value={job.status}
            onChange={(e) =>
              updateStatus(job._id, e.target.value)
            }
            style={{ padding: "6px", marginTop: "5px" }}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Selected</option>
            <option>Rejected</option>
          </select>

          <br />

          <button
            onClick={() => deleteJob(job._id)}
            style={{
              marginTop: "10px",
              background: "#d32f2f",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobList;
