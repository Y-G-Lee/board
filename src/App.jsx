import { Routes, Route } from "react-router-dom";
import "./App.css";
import banner from "./assets/banner.jpg";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="w-[1480px] m-auto">
      <div className="w-full h-36 mb-10">
        <img src={banner} className="w-full h-full" />
      </div>

      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
