import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (onRegister) {
        onRegister();
      } else {
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc, #eef2f7)",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#ffffff",
          padding: "36px",
          borderRadius: "20px",
          boxShadow: "0 30px 80px rgba(2,6,23,0.12)",
        }}
      >
        <h2
          style={{
            marginBottom: "8px",
            fontSize: "28px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Create Account
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "28px",
          }}
        >
          Start tracking your job applications
        </p>

        <form onSubmit={submitHandler}>
          {/* NAME */}
          <div style={field}>
            <label style={label}>Full Name</label>
            <input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={input}
            />
          </div>

          {/* EMAIL */}
          <div style={field}>
            <label style={label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={input}
            />
          </div>

          {/* PASSWORD */}
          <div style={field}>
            <label style={label}>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={input}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "#20c997",
              color: "#022c22",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(32,201,151,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Register
          </button>
        </form>

        <p
          style={{
            marginTop: "24px",
            fontSize: "14px",
            textAlign: "center",
            color: "#64748b",
          }}
        >
          Already have an account?{" "}
          <span
            style={{
              color: "#20c997",
              cursor: "pointer",
              fontWeight: 600,
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  marginBottom: "16px",
};

const label = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#475569",
};

const input = {
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  fontSize: "14px",
  outline: "none",
};

export default Register;
