import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProviderWrapper from "@/utils/SessionProviderWrapper";
import InfoWrapper from "@/utils/InfoWrapper";
import { SearchProvider } from "@/utils/SearchContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fauget | Listen podcast everyday",
  description: "Listen podcast everyday",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <SessionProviderWrapper session={session}>
          <SearchProvider>
            <InfoWrapper>{children}</InfoWrapper>
          </SearchProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
