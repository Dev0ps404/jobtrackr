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
    <form
      onSubmit={submitHandler}
      style={{
        background: "#ffffff",
        padding: "24px",
        borderRadius: "14px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        marginBottom: "32px",
      }}
    >
      <h2 style={{ marginBottom: "16px" }}>Add Application</h2>

      <div style={grid}>
        <input
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
          required
        />
        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
          required
        />

        <select name="jobType" value={form.jobType} onChange={handleChange}>
          <option>Full-time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <input
          name="salary"
          placeholder="CTC / Stipend"
          value={form.salary}
          onChange={handleChange}
        />

        <select name="source" value={form.source} onChange={handleChange}>
          <option>LinkedIn</option>
          <option>Company Website</option>
          <option>Referral</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
        />

        <select name="priority" value={form.priority} onChange={handleChange}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <textarea
        name="notes"
        placeholder="Notes / Interview feedback"
        value={form.notes}
        onChange={handleChange}
        rows={3}
        style={{ width: "100%", marginTop: "12px" }}
      />

      <button
        type="submit"
        style={{
          marginTop: "16px",
          padding: "10px 22px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add Application
      </button>
    </form>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
};

export default JobForm;
