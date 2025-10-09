// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";     // Optional page
import Apex from "./pages/Apex";           // Optional page
import Event from "./pages/Event";         // Optional page
import Academy from "./pages/Academy";     // Optional page
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery"; // New Projects page
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apex" element={<Apex />} />
          <Route path="event" element={<Event />} />
          {/* <Route path="academy" element={<Academy />} /> */}
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// Note: Ensure that the Layout component includes <Outlet /> to render child routes.