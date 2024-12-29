import type { Metadata, ResolvingMetadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import logo from "../../public/cropped-GrabDealsLogo.jpg";
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
      images: [{ url: "../../public/cropped-GrabDealsLogo.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Grab Deals",
      description:
        "Price Track personalized products across all e-commerce stores",
      images: ["../../public/cropped-GrabDealsLogo.jpg"],
    },
  };
}
// export const metadata: Metadata = {
//   title: "Grab Deals",
//   description:
//     "Price Track personalised products accorss all e-commerce stores ",
//     openGraph:{
//       images:[logo]
//     }
// };

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
