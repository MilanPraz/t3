import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { Navbar } from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} font-sans`}>
        <body className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <Navbar />
          <main className="mx-auto flex flex-1 flex-col px-4 py-8">
            <SignedOut>
              <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-lg">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    Welcome!
                  </h2>
                  <p className="mb-6 text-lg text-white/80">
                    Please sign in to access the application.
                  </p>
                  <div className="rounded bg-white px-4 py-2 font-semibold text-purple-600 transition-colors hover:bg-purple-100">
                    <SignInButton />
                  </div>
                </div>
              </div>
            </SignedOut>
            <SignedIn>{children}</SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
