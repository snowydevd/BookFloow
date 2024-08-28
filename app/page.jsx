import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

import HeroImg from "@/public/hero.png";
import NavBar from "@/components/ux/navbar";
import Image from "next/image";
import LibrosPage from "./books/librosPage";

export default function Component() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />

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
