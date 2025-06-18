import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/index.jsx";

const App = () => {
    return(
        <Router>
            <div className="p-0 m-0 box-border font-primary">


                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App;