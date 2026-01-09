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
    status: "Applied", // 🔥 FIX
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
      status: "Applied", // 🔥 FIX
    });

    refresh();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        name="companyName"
        placeholder="Company"
        onChange={handleChange}
        required
      />
      <input name="role" placeholder="Role" onChange={handleChange} required />

      <button type="submit">Add Application</button>
    </form>
  );
}

export default JobForm;
