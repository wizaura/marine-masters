import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({
  children,
}: PublicLayoutProps) {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}