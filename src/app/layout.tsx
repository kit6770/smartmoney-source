import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import GlobalContextProvider from "./app-context";

const sans = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Smart Money",
  description: "Smart Money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
