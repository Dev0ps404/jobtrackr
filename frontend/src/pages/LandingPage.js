import PublicNavbar from "../components/PublicNavbar";
import Features from "../components/Features";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LandingPage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // ✅ responsive detector
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <PublicNavbar />

      {/* ================= HERO SECTION ================= */}
      <section
        className="hero-section"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* GREEN CURVE (hide on mobile) */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              right: "-160px",
              top: "-180px",
              width: "640px",
              height: "640px",
              background: "linear-gradient(135deg, #20c997, #14b8a6)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
        )}

        <div
          className="container hero-container"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isMobile ? "32px" : "40px",
            padding: isMobile ? "80px 16px" : "120px 0",
            position: "relative",
            zIndex: 1,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ maxWidth: "560px" }}>
            <h1
              style={{
                marginBottom: "20px",
                fontSize: isMobile ? "32px" : "48px",
                lineHeight: 1.2,
              }}
            >
              Your AI Companion <br /> for Job Applications
            </h1>

            <p
              style={{
                marginBottom: "32px",
                fontSize: isMobile ? "16px" : "18px",
                color: "#475569",
              }}
            >
              In the competitive job market, staying organized and presenting
              yourself effectively is crucial. JobTrackr simplifies your job
              search with a smart AI‑powered platform.
            </p>

            <button
              className="btn-primary hero-btn"
              onClick={() => navigate("/login")}
              style={{
                width: isMobile ? "100%" : "auto",
                padding: "14px 28px",
              }}
            >
              START YOUR JOURNEY
            </button>
          </div>

          {/* RIGHT HERO IMAGE / DASHBOARD */}
          <div
            className="hero-image-wrapper"
            style={{
              transform: isMobile ? "none" : "translateX(-95px)",
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

              <div
                className="kanban"
                style={{
                  display: "flex",
                  gap: "12px",
                  overflowX: isMobile ? "auto" : "visible",
                }}
              >
                {/* COLUMN */}
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
