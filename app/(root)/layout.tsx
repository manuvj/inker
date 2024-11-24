import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/nav-bar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="relative">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
