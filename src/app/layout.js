import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fauget | Listen podcast everyday",
  description: "Listen podcast everyday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className="flex">
          <SideBar></SideBar>
          {children}
        </div>
      </body>
    </html>
  );
}
