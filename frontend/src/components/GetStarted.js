import GoogleLoginButton from "./GoogleLoginButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.querySelector(".observe-getstarted");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("getstarted-visible");
        } else {
          section.classList.remove("getstarted-visible");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="observe-getstarted"
      style={{
        background: "var(--bg-main)",
        padding: "140px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="getstarted-left">
          <h2 style={{ fontSize: "48px", marginBottom: "36px" }}>
            Get Started
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <div>
              <h3>1. Sign Up</h3>
              <p>Create your JobTrackr account for free.</p>
            </div>
            <div>
              <h3>2. Profile Input</h3>
              <p>Input your profile data or import LinkedIn CV.</p>
            </div>
            <div>
              <h3>3. Start Applying</h3>
              <p>Track applications, generate AI cover letters and CVs.</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="getstarted-card"
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "48px",
            boxShadow: "0 30px 80px rgba(2,6,23,0.15)",
          }}
        >
          <h3
            style={{
              fontSize: "26px",
              fontWeight: 700,
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            Start Tracking Today !!
          </h3>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "20px" }}
          />

          {/* REGISTER */}
          <button
            className="btn-primary"
            style={{ width: "100%", marginBottom: "18px" }}
            onClick={() => {
              if (!email) {
                alert("Please enter email");
                return;
              }

              // ✅ FAKE REGISTER SUCCESS
              navigate("/dashboard");
            }}
          >
            REGISTER
          </button>

          {/* OR */}
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

          {/* ✅ OFFICIAL GOOGLE BUTTON */}
          <GoogleLoginButton onSuccess={() => navigate("/dashboard")} />

          {/* LOGIN LINK */}
          <p
            style={{
              fontSize: "14px",
              textAlign: "center",
              marginTop: "22px",
            }}
          >
            Already have an account? <a href="/login">LOGIN</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
