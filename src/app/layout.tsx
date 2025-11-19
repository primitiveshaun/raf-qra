import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAF QRA",
  description: "Interactive Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-myriad antialiased text-bodyText bg-gray">
        {children}
      </body>
    </html>
  );
}
