import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { lazy, Suspense } from "react";

// import Header from "./components/Header.jsx";
const Footer = lazy(() => import("./components/Footer.jsx"));
const Index = lazy(() => import("./pages/index.jsx"));
const TentangKami = lazy(() => import("./pages/TentangKami.jsx"));
const Layanan = lazy(() => import("./pages/Layanan.jsx"));
const Lowongan = lazy(() => import("./pages/Lowongan.jsx"));
const DetailLowonganPekerjaan = lazy(() => import("./pages/DetailLowonganPekerjaan.jsx"));
const KontakKami = lazy(() => import("./pages/KontakKami.jsx"));

const App = () => {
    return(
        <Router>
            <div className="p-0 m-0 box-border font-primary">

                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/tentang-kami" element={<TentangKami />} />
                    <Route path="/layanan" element={<Layanan />} />
                    <Route path="/lowongan" element={<Lowongan />} />
                    <Route path="/lowongan/detail-lowongan/:id" element={<DetailLowonganPekerjaan />} />
                    <Route path="/kontak-kami" element={<KontakKami />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App;