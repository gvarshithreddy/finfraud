import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CyberHawks",
  description: "AI Driven financial Draud Detection System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
