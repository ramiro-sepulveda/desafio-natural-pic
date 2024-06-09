import PhotosProvider from "./context/ContextFotos";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <PhotosProvider>
        <Navbar />

        <Routes>
          <Route path="/desafio-natural-pic/" element={<Home />} />
          <Route path="/desafio-natural-pic/favoritos" element={<Favorites />} />
        </Routes>
      </PhotosProvider>
    </div>
  );
};
export default App;
