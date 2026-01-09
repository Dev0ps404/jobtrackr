import { useEffect, useCallback } from "react";

function GoogleLoginButton({ onSuccess }) {
  // 🔥 stable callback so eslint warning goes away
  const handleGoogleLogin = useCallback(
    async (response) => {
      try {
        const res = await fetch(
          "https://jobtrackr-hxk9.onrender.com/api/auth/google",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ credential: response.credential }),
          }
        );

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("userPhoto", data.user.photo); // 🔥 VERY IMPORTANT

        if (onSuccess) onSuccess();
      } catch (err) {
        console.error("GOOGLE LOGIN ERROR 👉", err);
        alert("Google login failed");
      }
    },
    [onSuccess]
  );

  useEffect(() => {
    const container = document.getElementById("google-login-btn");
    if (container) container.innerHTML = "";

    const GOOGLE_CLIENT_ID =
      "530359530192-7a15bjgklpsnjhpfoijoeo581lsp4t5c.apps.googleusercontent.com";

    function initGoogle() {
      if (!window.google) return;

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
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

    if (!window.google) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initGoogle;
      document.body.appendChild(script);
    } else {
      initGoogle();
    }
  }, [handleGoogleLogin]);

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
