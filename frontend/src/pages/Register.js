import React, { useState } from "react";
import API from "../services/api";

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", {
      name,
      email,
      password,
    });
    onRegister();
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
        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
