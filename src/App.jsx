import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/index.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>

                <Header />

                <Route path="/" element={<Index />} />

                <Footer />
            </Routes>
        </BrowserRouter>
    )
}

export default App;