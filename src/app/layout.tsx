import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="bg-emerald flex justify-between p-4 text-white">
            <div>
              <Image src="/logo.svg" alt="Logo" width={26} height={26} />
            </div>
          </header>
          <div className="flex flex-1 flex-col items-center justify-center">
            <main className="flex w-full flex-1 flex-col">{children}</main>
          </div>
          <footer className="bg-zinc text-primary mx-auto flex w-full max-w-7xl flex-col justify-around gap-2 p-4 px-4">
            <div className="socials row flex">
              {/* Social media links can be added here */}
              <Link
                href="https://www.instagram.com/estateplannerke/"
                className="mr-4"
                target="_blank"
              >
                <Image
                  src="/Instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@estateplannerke?_t=8hjofVDV2qk&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAae_JFZhKl5EvwGJvettVLkuWAGqmjCjXPiEIBTTjfIrZaUeEs1AljSfoJfouA_aem_Iz4URdKJkrC4NfqA-nCpDw"
                className="mr-4"
                target="_blank"
              >
                <Image src="/tiktok.svg" alt="tiktok" width={24} height={24} />
              </Link>
            </div>
            <p className="-mb-2 text-sm">Winnie Maingi</p>
            <p className="text-sm">© {currentYear} All rights reserved.</p>
          </footer>
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
