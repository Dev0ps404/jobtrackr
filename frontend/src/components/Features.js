import { useEffect, useState } from "react";

function Features() {
  const [isMobile, setIsMobile] = useState(false);

  const data = [
    [
      "🧠",
      "AI Cover Letter Generator",
      "Generate personalized, job‑specific cover letters instantly using AI. Stand out from other applicants effortlessly.",
    ],
    [
      "📊",
      "Application Tracking",
      "Track every job application with a visual board. Know exactly where you stand at every stage of the hiring process.",
    ],
    [
      "🎯",
      "Smart Job Suggestions",
      "Get AI‑powered job recommendations based on your profile, skills, and career goals.",
    ],
    [
      "📄",
      "Dynamic CV Builder",
      "Create and customize professional CVs in minutes. One profile, multiple CV versions.",
    ],
    [
      "⚡",
      "Productivity Boost",
      "Automate repetitive tasks and focus on applying, preparing, and improving your chances.",
    ],
    [
      "🔒",
      "Secure & Private",
      "Your data is encrypted and secure. You stay in control of your information at all times.",
    ],
  ];

  /* =======================
     MOBILE DETECTION
  ======================= */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =======================
     SCROLL REPEAT ANIMATION
  ======================= */
  useEffect(() => {
    const section = document.querySelector(".observe-features");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("features-visible");
        } else {
          section.classList.remove("features-visible");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features-section observe-features">
      <div className="container">
        {/* ===== SECTION HEADER ===== */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "48px" : "72px",
            padding: isMobile ? "0 12px" : undefined,
          }}
        >
          <span
            style={{
              color: "var(--primary)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            WHY CHOOSE JOBTRACKR
          </span>

          <h2
            style={{
              marginTop: "16px",
              fontSize: isMobile ? "28px" : "42px",
              fontWeight: 700,
              lineHeight: "1.2",
            }}
          >
            Smart tools to power <br /> your job search
          </h2>

          <p
            style={{
              marginTop: "20px",
              maxWidth: "640px",
              marginInline: "auto",
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "1.6",
              color: "var(--text-muted)",
            }}
          >
            JobTrackr combines AI‑powered automation with clean organization to
            help you apply smarter, faster, and more professionally.
          </p>
        </div>

        {/* ===== FEATURE GRID ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "32px",

            width: "100%",
          }}
        >
          {data.map(([icon, title, desc]) => (
            <div key={title} className="card feature-card">
              {/* ICON */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  color: "#022c22",
                }}
              >
                {icon}
              </div>

              <h3 style={{ marginTop: "22px" }}>{title}</h3>
              <p style={{ marginTop: "10px" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
