import Image from "next/image";

export default function About() {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-80px)] flex-col-reverse items-center justify-center px-4 md:flex-row">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter">
              About This Bot
              <div className="mt-2 h-1 w-40 bg-black dark:bg-white" />
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                The{" "}
                <span className="font-semibold">Helakuru News Bot V1.4</span> is
                your ultimate source for real-time news updates and information
                in Sinhala. Developed by{" "}
                <span className="font-semibold">Rish Studio</span>, this bot
                brings the latest headlines, important updates, and trending
                stories directly to your Discord server.
              </p>
              <p>
                Designed for Sri Lankan users, Helakuru News Bot aims to keep
                you connected with your community and the world. Join our
                growing community of users and bring the news to your server
                today!
              </p>
            </div>
          </div>

          {/* Right Column - Discord Interface */}
          <div className="rounded-lg bg-[#2f3136] p-6 text-gray-200">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">
                <Image
                  src="@/public/Helakuru_logo.png"
                  alt="Bot Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Helakuru News</span>
                  <span className="rounded bg-[#5865f2] px-1.5 py-0.5 text-xs">
                    APP
                  </span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-400">Helakuru News#5387</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-gray-400">About Me</h3>
                <p>Helakuru News Bot V1.4</p>
                <p className="text-sm text-gray-400">
                  Stay up-to-date with the latest news from Helakuru Esana directly on your Discord server! This bot automatically fetches and shares real-time news updates, complete with images, summaries, and links to full articles. <br>Perfect for keeping your community informed and engaged with important updates.
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Powerd By Helakuru Esana
                </p>
                <p className="text-sm text-gray-400">
                  Developer :- Rishmika Sandanu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
