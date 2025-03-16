import type { Metadata } from "next";
import { Noto_Sans, Poppins, Raleway } from "next/font/google";
import "./globals.css";

const notosans = Noto_Sans({
  variable: "--font-notosans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Los Colonos",
  description: "Proveedores de productos agrícolas de calidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${notosans.variable} ${poppins.variable} ${raleway.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
