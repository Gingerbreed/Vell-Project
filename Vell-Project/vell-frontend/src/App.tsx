import "./App.css";
import Navbar from "./components/Navbar.";
import { Route, Routes } from "react-router-dom";
import { Service, Home, About, Contact } from "./routes/exports";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Service />} path="/service" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </>
  );
}

export default App;
