import React from "react";
import { auth } from "@/app/auth";

export default async function NavbarDropMenu() {
  const session = await auth();
  console.log(session);
  if (!session) {
    return <p>Not in a session</p>;
  }
  return <div>{session.user.name}</div>;
}
