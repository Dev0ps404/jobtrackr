import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const footer = document.querySelector(".footer-inner");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("footer-visible");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className="footer"
      style={{
        background: "#f1f5f9",
        borderTop: "1px solid var(--border-soft)",
        marginTop: "120px",
      }}
    >
      <div className="container footer-inner">
        {/* ===== PHASE 1: BRAND ===== */}
        <div className="footer-phase footer-phase-1">
          <div
            style={{
              padding: "60px 0 40px",
              borderBottom: "1px solid var(--border-soft)",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              JobTrackr
            </h3>
            <p style={{ maxWidth: "420px" }}>
              An AI‑powered platform to manage, track and optimize your job
              applications professionally.
            </p>
          </div>
        </div>

        {/* ===== PHASE 2: LINKS ===== */}
        <div className="footer-phase footer-phase-2">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
              padding: "48px 0",
              borderBottom: "1px solid var(--border-soft)",
            }}
          >
            {/* Company */}
            <div>
              <h4 style={headingStyle}>Company</h4>
              <ul style={listStyle}>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 style={headingStyle}>Product</h4>
              <ul style={listStyle}>
                <li>
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="#">Tracking</a>
                </li>
                <li>
                  <a href="#">AI Tools</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 style={headingStyle}>Resources</h4>
              <ul style={listStyle}>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>

            {/* FOLLOW US — CENTERED FULL ROW */}
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              <h4 style={{ ...headingStyle, textAlign: "center" }}>
                Follow us
              </h4>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  marginTop: "16px",
                }}
              >
                <a
                  href="https://github.com/"
                  aria-label="GitHub"
                  className="footer-social"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://linkedin.com/"
                  aria-label="LinkedIn"
                  className="footer-social"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://twitter.com/"
                  aria-label="Twitter"
                  className="footer-social"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://instagram.com/"
                  aria-label="Instagram"
                  className="footer-social"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      fill="currentColor"
                      d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PHASE 3: COPYRIGHT ===== */}
        <div className="footer-phase footer-phase-3">
          <div
            style={{
              padding: "24px 0",
              textAlign: "center",
              fontSize: "14px",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} JobTrackr. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== STYLES ===== */

const headingStyle = {
  fontSize: "14px",
  fontWeight: 700,
  marginBottom: "16px",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const iconStyle = {
  width: "18px",
  height: "18px",
  fill: "currentColor",
};

/* ===== ICONS ===== */

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.06 11.06 0 0 1 5.79 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.57.24 2.73.12 3.02.73.8 1.17 1.82 1.17 3.07 0 4.38-2.69 5.35-5.25 5.63.41.36.78 1.08.78 2.18v3.24c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4V8z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.93 4.93 0 0 0 2.17-2.72 9.86 9.86 0 0 1-3.12 1.2 4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.64 3.16a4.93 4.93 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.54 13.94 13.94 0 0 0 7.55 22c9.05 0 14-7.5 14-14v-.64a9.93 9.93 0 0 0 2.4-2.54z" />
  </svg>
);

export default Footer;
