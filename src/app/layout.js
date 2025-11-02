import "./globals.css";
import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Playfair_Display,
  Roboto,
  Mea_Culpa,
} from "next/font/google";

// Existing Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✨ Add your custom Google fonts
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const meaCulpa = Mea_Culpa({
  variable: "--font-mea-culpa",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Fine Way Travels",
  description: "Explore your dream holidays with Fine Way Travels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${dancingScript.variable} 
          ${playfair.variable} 
          ${roboto.variable} 
          ${meaCulpa.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
