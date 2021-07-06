import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginScreen() {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default LoginScreen;
