import Link from "next/link";

import HeroImg from "@/public/hero.png";
import NavBar from "@/components/ux/navbar";
import Image from "next/image";
import LibrosPage from "./books/librosPage";
import { useSession } from "next-auth/react";
import { auth } from "./auth";

export default async function Component() {
  const { data: session } = await auth();
  console.log(session);
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <div>{session?.user?.name}</div>
      <LibrosPage />
    </main>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
