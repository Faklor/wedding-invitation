//import { Geist, Geist_Mono } from "next/font/google";
import LocalFont from 'next/font/local'
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const lastochka = LocalFont({
  src: "./fonts/ofont.ru_Lastochka.ttf",
  variable: "--font-lastochka",
  display: "swap",
});

const alsschlangesans = LocalFont({
  src: "./fonts/alsschlangesans.otf",
  variable: "--font-lastochka",
  display: "swap",
});

const SmallestPixel = LocalFont({
  src: "./fonts/SmallestPixel7.ttf",
  variable: "--font-lastochka",
  display: "swap",
});



export const metadata = {
  title: "Wedding Invitation",
  description: "By falokfy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${lastochka.variable} ${alsschlangesans.variable} ${SmallestPixel.variable}`}>
        {children}
      </body>
    </html>
  );
}
