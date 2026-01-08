import { Link } from "react-router-dom";
import { useEffect } from "react";

function PublicNavbar() {
  // ✅ SHADOW ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (!nav) return;

      if (window.scrollY > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        className="container"
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "18px",
            fontWeight: 700,
            color: "#020617",
          }}
        >
          <img
            src="/logo.png"
            alt="JobTrackr Logo"
            className="navbar-logo"
            style={{
              height: "52px",
              width: "auto",
              display: "block",
            }}
          />
        </Link>

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            fontSize: "15px",
          }}
        >
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <Link to="/login" className="nav-link">
            Login
          </Link>

          <Link to="/login">
            <button className="btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default PublicNavbar;
