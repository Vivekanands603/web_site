import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Directors from "./pages/Directors";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// Import other sections (e.g. Directors, Products, etc.)

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutUs />
              <Directors/>
              <Products/>
              <News />
              <Contact/>  
              {/* <Directors /> */}
              {/* <Products /> */}
              {/* Add other sections below */}
            </>
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
