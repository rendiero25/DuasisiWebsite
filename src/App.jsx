import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/index.jsx";
import TentangKami from "./pages/TentangKami.jsx";
import Layanan from "./pages/Layanan.jsx";

const App = () => {
    return(
        <Router>
            <div className="p-0 m-0 box-border font-primary">

                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/tentang-kami" element={<TentangKami />} />
                    <Route path="/layanan" element={<Layanan />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App;