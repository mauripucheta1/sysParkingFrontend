import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Testimonies from "./Testimonies";
import Contact from "./Contact";

const App = () => {

    return (

        <>
        
            <Header />

            <Home />

            <About />

            <Services />

            <Testimonies />

            <Contact />

        </>

    );

};

export default App;