import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADDED
import api from "../utils/api"; // ✅ ADDED (same api used in Login)

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ ADDED

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // ✅ BACKEND REGISTER CALL (UPDATED)
      await api.post("/api/auth/register", {
        name,
        email,
        password,
      });

      // ✅ EXISTING FLOW PRESERVED
      if (onRegister) {
        onRegister();
      } else {
        navigate("/login"); // fallback safety
      }
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h2>Register</h2>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
