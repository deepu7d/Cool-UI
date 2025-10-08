import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Library",
  description: "shadcn like UI library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex gap-10">{children}</div>
      </body>
    </html>
  );
}
