import React from "react";
import { GlobalThemeContextProvider } from "./thme-context";
import { MoviesContextProvider } from "./movies-context";
import { AuthContextProvider } from "./auth-context";

///using context wrapper to wrap the app with the multiple context provider
function ContextWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlobalThemeContextProvider>
      <AuthContextProvider>
        <MoviesContextProvider>{children}</MoviesContextProvider>
      </AuthContextProvider>
    </GlobalThemeContextProvider>
  );
}

export default ContextWrapper;
