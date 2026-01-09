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
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
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
      });

      refresh();
    } catch (error) {
      alert("Failed to add application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        background: "linear-gradient(180deg, #ffffff, #f8fafc)",
        padding: "36px",
        borderRadius: "20px",
        marginBottom: "40px",
        boxShadow: "0 25px 60px rgba(2,6,23,0.12)",
        border: "1px solid #e5e7eb",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: "28px" }}>
        <h2 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>
          Add Application
        </h2>
        <p style={{ color: "#64748b", marginTop: "6px" }}>
          Track a new job opportunity
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
        }}
      >
        <Input
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
          required
        />
        <Input
          name="role"
          placeholder="Role / Position"
          value={form.role}
          onChange={handleChange}
          required
        />

        <Select name="jobType" value={form.jobType} onChange={handleChange}>
          <option>Full-time</option>
          <option>Internship</option>
          <option>Remote</option>
        </Select>

        <Input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <Input
          name="salary"
          placeholder="CTC / Stipend"
          value={form.salary}
          onChange={handleChange}
        />

        <Select name="source" value={form.source} onChange={handleChange}>
          <option>LinkedIn</option>
          <option>Company Website</option>
          <option>Referral</option>
          <option>Other</option>
        </Select>

        <Input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
        />

        <Select name="priority" value={form.priority} onChange={handleChange}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </Select>

        <Input
          name="recruiterName"
          placeholder="Recruiter Name"
          value={form.recruiterName}
          onChange={handleChange}
        />
        <Input
          name="recruiterEmail"
          placeholder="Recruiter Email"
          value={form.recruiterEmail}
          onChange={handleChange}
        />
      </div>

      {/* NOTES */}
      <textarea
        name="notes"
        placeholder="Notes / Interview Feedback"
        rows="3"
        value={form.notes}
        onChange={handleChange}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          fontSize: "14px",
        }}
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "28px",
          padding: "14px 28px",
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          color: "#fff",
          border: "none",
          borderRadius: "14px",
          fontSize: "15px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(37,99,235,0.4)",
        }}
      >
        {loading ? "Adding..." : "Add Application"}
      </button>
    </form>
  );
}

/* ---------- Reusable Inputs ---------- */
const baseInputStyle = {
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  fontSize: "14px",
};

const Input = (props) => <input {...props} style={baseInputStyle} />;
const Select = (props) => <select {...props} style={baseInputStyle} />;

export default JobForm;
