import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/sidebar/SideBar";
import { getServerSession } from "next-auth";
import SessionProviderWrapper from "@/utils/SessionProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fauget | Listen podcast everyday",
  description: "Listen podcast everyday",
};

const session = await getServerSession();

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <SessionProviderWrapper session={session}>
          <div className="flex justify-between">
            <SideBar></SideBar>
            <div className="bg-[#302f2f] w-full -ml-[-160px] px-4">
              {children}
            </div>
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
