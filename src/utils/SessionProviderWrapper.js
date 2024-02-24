"use client";
import { SessionProvider } from "next-auth/react";

// Change the export to use the correct case
const SessionProviderWrapper = ({ children }) => {
  return <SessionProvider >{children}</SessionProvider>;
};

export default SessionProviderWrapper;
