"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      style={{
        background: "transparent",
        border: "1.5px solid #EDE8DC",
        borderRadius: "8px",
        padding: "0.4rem 1rem",
        fontSize: "0.8rem",
        fontWeight: 600,
        color: "#4A4A4A",
        cursor: "pointer",
        fontFamily: "'Inter', system-ui, sans-serif",
        transition: "border-color 0.15s",
      }}
    >
      Sign out
    </button>
  );
}
