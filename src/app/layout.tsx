import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import { ReactNode, Suspense } from "react";

export const metadata: Metadata = {
  title: "Loomi Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<div>Loading...</div>} >
        <Providers>
          <body >{children}</body>
        </Providers>
      </Suspense>
    </html>
  );
}
