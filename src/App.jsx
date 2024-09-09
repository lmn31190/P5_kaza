import Home from "./Page/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from "./Page/About/About";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import SingleLogement from "./Page/singleLogement/SingleLogement";
import Error404 from "./Page/404/Error404";

const App = () => {
  

  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<SingleLogement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
