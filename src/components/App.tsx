import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

const App = () => {

    return (

        <BrowserRouter>

            <Header />

            <main>

                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    
                </Routes>

            </main>

        </BrowserRouter>

    );

};

export default App;