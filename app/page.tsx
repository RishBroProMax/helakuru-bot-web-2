"use client";

import { Button } from "@/components/ui/button";
// import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Laptop } from "lucide-react";
import HelakuruLogo from "@/public/Helakuru_logo.png";
import { useEffect, useState } from "react";
export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen w-full pb-20 bg-gradient-to-br from-[#a8e6cf] via-[#dcedc1] to-[#ffd3b6] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Header */}
      <header className="container flex items-center justify-between px-4 pt-6 mx-auto">
        <div className="flex items-center space-x-2 text-xl font-bold">
          <span className="text-2xl">&lt;/&gt;</span>
          <span>RISH STUDIO</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <Laptop className="mr-2 h-4 w-4" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto flex min-h-[calc(100vh-80px)] flex-col-reverse items-center justify-center px-4 md:flex-row">
        <div className="flex flex-1 flex-col justify-center mt-10 md:mt-0">
          <div className="max-w-[600px] space-y-8">
            <h1 className="font-bold leading-tight tracking-tighter text-5xl lg:text-6xl xl:text-8xl">
              Helakuru
              <br />
              News Bot{" "}
              <span className="relative">
                V1.2
                <div className="absolute bottom-0 h-1 w-full bg-black dark:bg-white" />
              </span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-black hover:bg-white/90 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                <Link href="#">Invite to Server</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/40 dark:bg-gray-700/30 dark:hover:bg-gray-700/40"
              >
                <Link href="#">More Info</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Placeholder Image */}
        <div className="mt-8 md:mt-0 w-4/5 md:w-auto">
          <Image
            src={HelakuruLogo}
            alt="Helakuru News Bot"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  );
}
