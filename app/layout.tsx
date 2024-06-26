import type { Metadata } from "next";

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Header from "@/components/Header";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Clerk Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <main className="app">
              {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
