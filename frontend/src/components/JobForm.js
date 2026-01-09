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
      alert(
        error.response?.data?.message ||
          "Something went wrong while adding application"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        background: "#fff",
        padding: "28px",
        borderRadius: "14px",
        marginBottom: "32px",
        boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Add Application</h2>

      {/* GRID FORM */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        <input
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
          required
        />

        <input
          name="role"
          placeholder="Role / Position"
          value={form.role}
          onChange={handleChange}
          required
        />

        <select name="jobType" value={form.jobType} onChange={handleChange}>
          <option value="Full-time">Full-time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
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
          <option value="LinkedIn">LinkedIn</option>
          <option value="Company Website">Company Website</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
        />

        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <input
          name="recruiterName"
          placeholder="Recruiter Name"
          value={form.recruiterName}
          onChange={handleChange}
        />

        <input
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
          marginTop: "16px",
          width: "100%",
        }}
      />

      {/* BUTTON */}
      <div style={{ marginTop: "20px" }}>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Application"}
        </button>
      </div>
    </form>
  );
}

export default JobForm;
