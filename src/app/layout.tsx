import type { Metadata, ResolvingMetadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return {
    title: "Grab Deals",
    description:
      "Price Track personalized products across all e-commerce stores",
    openGraph: {
      title: "Grab Deals",
      description:
        "Price Track personalized products across all e-commerce stores",
      images: [{ url: "/cropped-GrabDealsLogo.jpg" }], // Use direct path to public folder
    },
    twitter: {
      card: "summary_large_image",
      title: "Grab Deals",
      description:
        "Price Track personalized products across all e-commerce stores",
      images: ["/cropped-GrabDealsLogo.jpg"], // Use direct path to public folder
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
