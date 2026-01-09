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
    <form onSubmit={submitHandler} style={container}>
      <h2 style={title}>Add Application</h2>

      {/* CARD 1 */}
      <Card title="Job Details">
        <Grid>
          <Field label="Company Name">
            <input
              name="companyName"
              placeholder="e.g. Google"
              value={form.companyName}
              onChange={handleChange}
              required
            />
          </Field>

          <Field label="Role / Position">
            <input
              name="role"
              placeholder="e.g. Frontend Developer"
              value={form.role}
              onChange={handleChange}
              required
            />
          </Field>

          <Field label="Job Type">
            <select name="jobType" value={form.jobType} onChange={handleChange}>
              <option>Full-time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </Field>

          <Field label="Location">
            <input
              name="location"
              placeholder="Bangalore / Remote"
              value={form.location}
              onChange={handleChange}
            />
          </Field>
        </Grid>
      </Card>

      {/* CARD 2 */}
      <Card title="Compensation & Source">
        <Grid>
          <Field label="CTC / Stipend">
            <input
              name="salary"
              placeholder="12 LPA / 30k pm"
              value={form.salary}
              onChange={handleChange}
            />
          </Field>

          <Field label="Source">
            <select name="source" value={form.source} onChange={handleChange}>
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
            />
          </Field>

          <Field label="Priority">
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </Field>
        </Grid>
      </Card>

      {/* CARD 3 */}
      <Card title="Notes">
        <textarea
          name="notes"
          placeholder="Interview feedback, HR call notes, next steps..."
          value={form.notes}
          onChange={handleChange}
          rows={4}
          style={textarea}
        />
      </Card>

      <button type="submit" style={button}>
        Add Application
      </button>
    </form>
  );
}

/* ---------- SMALL UI PARTS ---------- */

const Card = ({ title, children }) => (
  <div style={card}>
    <h4 style={cardTitle}>{title}</h4>
    {children}
  </div>
);

const Field = ({ label, children }) => (
  <div>
    <label style={label}>{label}</label>
    {children}
  </div>
);

const Grid = ({ children }) => <div style={grid}>{children}</div>;

/* ---------- STYLES ---------- */

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

const label = {
  display: "block",
  marginBottom: "6px",
  fontSize: "14px",
  fontWeight: 600,
};

const textarea = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
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
