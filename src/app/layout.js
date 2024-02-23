import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProviderWrapper from "@/utils/SessionProviderWrapper";
import InfoWrapper from "@/utils/InfoWrapper";

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
          <InfoWrapper>{children}</InfoWrapper>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
