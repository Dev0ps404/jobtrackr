import React, { useState } from "react";
import API from "../utils/api";

function JobForm({ refresh }) {
  const [form, setForm] = useState({
    companyName: "",
    role: "",
    jobType: "Full-time",
    location: "",
    salary: "",
    source: "LinkedIn",
    deadline: "",
    priority: "Medium",
    recruiterName: "",
    recruiterEmail: "",
    notes: "",
    status: "Applied",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("SUBMIT CLICKED"); // ✅ button confirm yahin

    await API.post("/applications", form);

    setForm({
      companyName: "",
      role: "",
      jobType: "Full-time",
      location: "",
      salary: "",
      source: "LinkedIn",
      deadline: "",
      priority: "Medium",
      recruiterName: "",
      recruiterEmail: "",
      notes: "",
      status: "Applied",
    });

    refresh();
  };

  return (
    <form onSubmit={submitHandler} style={container}>
      <h2 style={title}>Add Application</h2>

      {/* CARD 1 */}
      <div style={card}>
        <h4 style={cardTitle}>Job Details</h4>
        <div style={grid}>
          <Field label="Company Name">
            <input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. Google"
              style={input}
              required
            />
          </Field>

          <Field label="Role / Position">
            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer"
              style={input}
              required
            />
          </Field>

          <Field label="Job Type">
            <select
              name="jobType"
              value={form.jobType}
              onChange={handleChange}
              style={input}
            >
              <option>Full-time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </Field>

          <Field label="Location">
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Bangalore / Remote"
              style={input}
            />
          </Field>
        </div>
      </div>

      {/* CARD 2 */}
      <div style={card}>
        <h4 style={cardTitle}>Compensation & Source</h4>
        <div style={grid}>
          <Field label="CTC / Stipend">
            <input
              name="salary"
              value={form.salary}
              onChange={handleChange}
              placeholder="12 LPA / 30k pm"
              style={input}
            />
          </Field>

          <Field label="Source">
            <select
              name="source"
              value={form.source}
              onChange={handleChange}
              style={input}
            >
              <option>LinkedIn</option>
              <option>Company Website</option>
              <option>Referral</option>
              <option>Other</option>
            </select>
          </Field>

          <Field label="Deadline">
            <input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              style={input}
            />
          </Field>

          <Field label="Priority">
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              style={input}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </Field>
        </div>
      </div>

      {/* CARD 3 */}
      <div style={card}>
        <h4 style={cardTitle}>Notes</h4>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Interview feedback, HR call notes..."
          rows={4}
          style={textarea}
        />
      </div>

      <button type="submit" style={button}>
        Add Application
      </button>
    </form>
  );
}

/* ---------- SMALL COMPONENT ---------- */
const Field = ({ label, children }) => (
  <div>
    <label style={labelStyle}>{label}</label>
    {children}
  </div>
);

/* ---------- STYLES (ALL OBJECTS – NO ERROR) ---------- */

const container = {
  maxWidth: "1000px",
};

const title = {
  fontSize: "30px",
  marginBottom: "20px",
};

const card = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "16px",
  marginBottom: "18px",
  boxShadow: "0 12px 35px rgba(2,6,23,0.08)",
};

const cardTitle = {
  marginBottom: "14px",
  fontSize: "16px",
  color: "#2563eb",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};

const labelStyle = {
  marginBottom: "6px",
  fontSize: "14px",
  fontWeight: 600,
  display: "block",
};

const input = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
};

const textarea = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
};

const button = {
  marginTop: "18px",
  padding: "12px 28px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  fontSize: "15px",
  cursor: "pointer",
};

export default JobForm;
