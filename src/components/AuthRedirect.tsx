import { useEffect } from "react";

const AuthRedirect = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      // Si no hay código, redirige a Mercado Libre para autenticarse
      const clientId = "TU_CLIENT_ID";
      const redirectUri = encodeURIComponent("http://localhost:3000"); // o tu dominio real
      const authUrl = `https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

      window.location.href = authUrl;
    } else {
      console.log("Código recibido:", code);
      // Aquí puedes intercambiar el código por un token si lo necesitas
    }
  }, []);

  return <p>Redirigiendo para autenticación...</p>;
};

export default AuthRedirect;
