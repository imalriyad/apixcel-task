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
        <div className="flex justify-between">
          <SideBar></SideBar>
          <div className="bg-[#302f2f] w-full -ml-[-160px] px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
