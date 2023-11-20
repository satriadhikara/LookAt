import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LookAt",
  description:
    "A website that presents an advanced Content-Based Image Retrieval (CBIR) system using linear algebra principles to analyze and compare images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
