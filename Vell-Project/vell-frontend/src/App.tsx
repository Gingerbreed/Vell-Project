import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Service, Home, About, Contact } from "./routes/exports";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Service />} path="/service" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
