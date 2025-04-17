
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="260966555566" />
    </div>
  );
}
