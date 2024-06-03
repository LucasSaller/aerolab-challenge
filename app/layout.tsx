import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { UserProvider } from "./user/context";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "./components/Navbar";
export const metadata: Metadata = {
  title: "Aerolab Challenge",
  description: "aerolab coding challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-14`}>
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
