import React from "react";
import { auth } from "@/app/auth";

export default async function NavbarDropMenu() {
  const session = await auth();
  console.log(session);
  if (!session) {
    return null;
  }
  return <div>{session.user.name}</div>;
}
