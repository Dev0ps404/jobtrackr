import PublicNavbar from "../components/PublicNavbar";
import Features from "../components/Features";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import HeroKanban from "../components/HeroKanban";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <PublicNavbar />

      {/* ================= HERO SECTION ================= */}
      <section
        className="hero-section"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* GREEN CURVE */}
        <div
          style={{
            position: "absolute",
            right: "-160px", // 👈 pehle zyada right tha
            top: "-180px",
            width: "640px",
            height: "640px",
            background: "linear-gradient(135deg, #20c997, #14b8a6)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <div
          className="container hero-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px", // 👈 spacing controlled
            padding: "120px 0",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ maxWidth: "560px" }}>
            <h1 style={{ marginBottom: "20px" }}>
              Your AI Companion <br /> for Job Applications
            </h1>

            <p style={{ marginBottom: "32px" }}>
              In the competitive job market, staying organized and presenting
              yourself effectively is crucial. JobTrackr simplifies your job
              search with a smart AI‑powered platform.
            </p>

            <button
              className="btn-primary hero-btn"
              onClick={() => navigate("/login")}
            >
              START YOUR JOURNEY
            </button>
          </div>

          {/* RIGHT HERO IMAGE / DASHBOARD */}
          <div
            className="hero-image-wrapper"
            style={{
              transform: "translateX(-95px)", // ✅ MAIN FIX (left shift)
              maxWidth: "460px",
              width: "100%",
            }}
          >
            <div
              className="hero-image"
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "20px",
                boxShadow: "0 40px 120px rgba(0,0,0,0.35)",
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: "12px" }}>
                My job search
              </div>

              <div className="kanban">
                <div className="kanban-col">
                  <div className="kanban-title">Wishlist</div>
                  <div className="kanban-card">
                    <img src="/logos/google.png" alt="Google" />
                    <span>Frontend Engineer</span>
                  </div>
                  <div className="kanban-card">
                    <img src="/logos/amazon.png" alt="Amazon" />
                    <span>SDE I</span>
                  </div>
                </div>

                <div className="kanban-col">
                  <div className="kanban-title">Applied</div>
                  <div className="kanban-card">
                    <img src="/logos/meta.png" alt="Meta" />
                    <span>React Developer</span>
                  </div>
                  <div className="kanban-card">
                    <img src="/logos/netflix.png" alt="Netflix" />
                    <span>UI Engineer</span>
                  </div>
                </div>

                <div className="kanban-col">
                  <div className="kanban-title">Interview</div>
                  <div className="kanban-card">
                    <img src="/logos/microsoft.png" alt="Microsoft" />
                    <span>UI Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CURVE */}
        <svg
          viewBox="0 0 1440 120"
          style={{ display: "block", marginTop: "-1px" }}
        >
          <path
            fill="var(--bg-main)"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L0,0Z"
          />
        </svg>
      </section>

      <Features />
      <GetStarted />
      <Footer />
    </>
  );
}

export default LandingPage;
