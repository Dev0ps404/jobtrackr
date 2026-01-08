import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // EMAIL LOGIN
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    // ✅ SAVE USER INFO
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", email.split("@")[0]);

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--bg-main)",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#fff",
          padding: "48px",
          borderRadius: "20px",
          boxShadow: "0 30px 80px rgba(2,6,23,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "28px" }}>
          Login to JobTrackr
        </h2>

        {/* EMAIL LOGIN */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "16px" }}
          />

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", marginBottom: "18px" }}
          >
            LOGIN
          </button>
        </form>

        <div
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "14px",
            margin: "18px 0",
          }}
        >
          or
        </div>

        {/* GOOGLE LOGIN */}
        <GoogleLoginButton onSuccess={() => navigate("/dashboard")} />

        <p
          style={{
            fontSize: "14px",
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          Don’t have an account? <a href="/register">REGISTER</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
