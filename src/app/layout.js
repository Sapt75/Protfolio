import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./app.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
    x-data="{ mobileMenu: false }"
        className="relative"
      >
        {children}
      </body>
    </html>
  );
}
