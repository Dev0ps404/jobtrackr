import GoogleLoginButton from "./GoogleLoginButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  /* ===== MOBILE DETECTION ===== */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== SCROLL ANIMATION (UNCHANGED) ===== */
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
        padding: isMobile ? "80px 0" : "140px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
          gap: isMobile ? "48px" : "80px",
          alignItems: "center",
          padding: isMobile ? "0 16px" : undefined,
        }}
      >
        {/* LEFT CONTENT */}
        <div className="getstarted-left">
          <h2
            style={{
              fontSize: isMobile ? "32px" : "48px",
              marginBottom: "36px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Get Started
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              textAlign: isMobile ? "center" : "left",
            }}
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
            padding: isMobile ? "32px 24px" : "48px",
            boxShadow: "0 30px 80px rgba(2,6,23,0.15)",
            width: "100%",
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
            style={{
              marginBottom: "20px",
              width: "100%",
            }}
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

          {/* GOOGLE LOGIN */}
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
