"use client";

import { Button } from "@mui/material";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LogInOutButton() {
  const { status, data } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Button variant="contained" onClick={() => signIn("spotify")}>
          Sign in
        </Button>
      ) : (
        <Button onClick={() => signOut()}>Sign out</Button>
      )}
    </>
  );
}
