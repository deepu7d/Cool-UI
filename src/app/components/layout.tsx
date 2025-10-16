import SiderBar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full bg-black">
      <SiderBar />
      {children}
    </div>
  );
}
