import { Routes, Route } from "react-router-dom";
import "./App.css";
import banner from "./assets/banner.jpg";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Write from "./pages/Write/Write";
function App() {
  return (
    <div className="w-[1280px] m-auto">
      <div className="w-full h-36 mb-4">
        <img src={banner} className="w-full h-full" />
      </div>

      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
