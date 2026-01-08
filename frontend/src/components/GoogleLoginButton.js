import { useEffect } from "react";

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
        client_id:
          "530359530192-tcpi2ueqlfv1vecvtikd0cv4acst0fvs.apps.googleusercontent.com",
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

  const handleGoogleLogin = (response) => {
    // Decode JWT
    const base64Url = response.credential.split(".")[1];
    const decoded = JSON.parse(atob(base64Url));

    // SAVE USER INFO
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("userName", decoded.name);
    localStorage.setItem("userEmail", decoded.email);
    localStorage.setItem("userPhoto", decoded.picture); // 🔥 PHOTO

    if (onSuccess) onSuccess();
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
