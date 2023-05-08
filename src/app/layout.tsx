import { Providers } from "./providers";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata = {
  title: "Jackpot Syndicate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
