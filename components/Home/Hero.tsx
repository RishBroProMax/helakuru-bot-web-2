import { Button } from "@/components/ui/button";
// import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import HelakuruLogo from "@/public/Helakuru_logo.png";

export default function Hero() {
  return (
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
              <Link href="https://discord.com/oauth2/authorize?client_id=1306259513090769027&permissions=277025392704&integration_type=0&scope=bot">Invite to Server</Link>
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
  );
}
