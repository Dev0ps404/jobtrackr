import { useEffect } from "react";
import api from "../utils/api";

function GoogleLoginButton({ onSuccess }) {
  useEffect(() => {
    const container = document.getElementById("google-login-btn");
    if (container) container.innerHTML = "";

    if (!document.getElementById("google-gsi-script")) {
      const script = document.createElement("script");
      script.id = "google-gsi-script";
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initGoogle;
      document.body.appendChild(script);
    } else {
      initGoogle();
    }

    function initGoogle() {
      if (!window.google) return;

      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogleLogin,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-login-btn"),
        {
          theme: "outline",
          size: "large",
          width: "100%",
        }
      );
    }
  }, []);

  const handleGoogleLogin = async (response) => {
    try {
      const res = await api.post("/api/auth/google", {
        credential: response.credential,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.user.name);
      localStorage.setItem("userEmail", res.data.user.email);
      if (res.data.user.photo) {
        localStorage.setItem("userPhoto", res.data.user.photo);
      }

      if (onSuccess) onSuccess();
    } catch (err) {
      alert("Google login failed");
    }
  };

  return (
    <div
      id="google-login-btn"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default GoogleLoginButton;
