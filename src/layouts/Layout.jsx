// src/layouts/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingInquiryButton from "../components/FloatingInquiryButton";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full">
        <FloatingInquiryButton />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
