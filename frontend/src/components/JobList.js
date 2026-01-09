import React from "react";
import API from "../utils/api";

/* ---------- Deadline Highlight ---------- */
const getDeadlineStyle = (deadline) => {
  if (!deadline) return {};

  const today = new Date();
  const dueDate = new Date(deadline);
  const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));

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
    if (!window.confirm("Delete this application?")) return;
    await API.delete(`/applications/${id}`);
    refresh();
  };

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>Your Applications</h2>

      {jobs.length === 0 && <p>No applications found.</p>}

      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "18px",
            marginBottom: "16px",
            boxShadow: "0 8px 24px rgba(2,6,23,0.08)",
            ...getDeadlineStyle(job.deadline),
          }}
        >
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <h3 style={{ margin: 0 }}>{job.companyName}</h3>
            <span style={{ fontSize: "14px", color: "#64748b" }}>
              {job.status}
            </span>
          </div>

          <p style={{ margin: "4px 0", color: "#475569" }}>{job.role}</p>

          {/* META */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              fontSize: "14px",
              marginTop: "8px",
              color: "#475569",
            }}
          >
            {job.priority && (
              <span>
                <strong>Priority:</strong>{" "}
                <span style={getPriorityStyle(job.priority)}>
                  {job.priority}
                </span>
              </span>
            )}

            {job.deadline && (
              <span>
                <strong>Deadline:</strong>{" "}
                {new Date(job.deadline).toLocaleDateString()}
              </span>
            )}
          </div>

          {/* ACTIONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "14px",
            }}
          >
            <select
              value={job.status}
              onChange={(e) => updateStatus(job._id, e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: "6px",
              }}
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Selected</option>
              <option>Rejected</option>
            </select>

            <button
              onClick={() => deleteJob(job._id)}
              style={{
                background: "#fee2e2",
                color: "#b91c1c",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobList;
