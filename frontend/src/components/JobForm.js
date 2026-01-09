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
    <form onSubmit={submitHandler} style={card}>
      <h2 style={title}>Add Application</h2>

      <div style={grid}>
        {/* Company */}
        <Field label="Company Name">
          <input
            name="companyName"
            placeholder="e.g. Google, Flipkart"
            value={form.companyName}
            onChange={handleChange}
            required
          />
        </Field>

        {/* Role */}
        <Field label="Role / Position">
          <input
            name="role"
            placeholder="e.g. Frontend Developer"
            value={form.role}
            onChange={handleChange}
            required
          />
        </Field>

        {/* Job Type */}
        <Field label="Job Type">
          <select name="jobType" value={form.jobType} onChange={handleChange}>
            <option>Full-time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>
        </Field>

        {/* Location */}
        <Field label="Location">
          <input
            name="location"
            placeholder="e.g. Bangalore / Remote"
            value={form.location}
            onChange={handleChange}
          />
        </Field>

        {/* Salary */}
        <Field label="CTC / Stipend">
          <input
            name="salary"
            placeholder="e.g. 12 LPA / 30k per month"
            value={form.salary}
            onChange={handleChange}
          />
        </Field>

        {/* Source */}
        <Field label="Source">
          <select name="source" value={form.source} onChange={handleChange}>
            <option>LinkedIn</option>
            <option>Company Website</option>
            <option>Referral</option>
            <option>Other</option>
          </select>
        </Field>

        {/* Deadline */}
        <Field label="Application / Deadline Date">
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />
        </Field>

        {/* Priority */}
        <Field label="Priority">
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </Field>
      </div>

      {/* Notes */}
      <div style={{ marginTop: "16px" }}>
        <label style={label}>Notes / Interview Feedback</label>
        <textarea
          name="notes"
          placeholder="HR call notes, interview experience, next steps..."
          value={form.notes}
          onChange={handleChange}
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

/* ---------- SMALL UI COMPONENT ---------- */
const Field = ({ label, children }) => (
  <div>
    <label style={labelStyle}>{label}</label>
    {children}
  </div>
);

/* ---------- STYLES ---------- */

const card = {
  background: "#ffffff",
  padding: "28px",
  borderRadius: "18px",
  boxShadow: "0 12px 40px rgba(2,6,23,0.08)",
  marginBottom: "32px",
};

const title = {
  marginBottom: "20px",
  fontSize: "28px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontSize: "14px",
  fontWeight: 600,
  color: "#334155",
};

const label = {
  display: "block",
  marginBottom: "6px",
  fontWeight: 600,
};

const textarea = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
};

const button = {
  marginTop: "22px",
  padding: "12px 26px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "15px",
};

export default JobForm;
