import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { AuthCheck } from "./utils/withAuth";

const publicSans = Public_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Admin | Elite Air Filters",
  description:
    "Best Air Filters Inc delivers home air filters when it's time to change them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <AuthCheck>{children}</AuthCheck>
      </body>
    </html>
  );
}
