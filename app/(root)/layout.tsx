import NavBar from "@/components/ui/nav-bar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <NavBar />
      {children}
    </main>
  );
}
