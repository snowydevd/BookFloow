"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
// import { auth } from "@/app/auth";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";
export default async function SignInGoogle() {
  // const router = useRouter();
  // const { data: session } = useSession();

  // useEffect({
  //   if(session) {
  //     router.push("/");
  //   },
  // });

  const handleLogin = async () => {
    await signIn("google", { redirect: false });
  };

  return <Button onClick={handleLogin}>Inicia sesion con google</Button>;
}
