import Link from "next/link";
import HeroImg from "@/public/hero.png";
import NavBar from "@/components/ux/navbar";
import Image from "next/image";
import LibrosPage from "./books/librosPage";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
export default async function Page() {
  // const { data: session } = await auth();
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <AuroraBackground showRadialGradient>
        <div className="relative flex flex-col gap-4 items-center justify-center px-4">
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Lee, intercambia y lee de nuevo.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </div>
      </AuroraBackground>
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
