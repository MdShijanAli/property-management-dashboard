import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({children}){
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-7xl flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}