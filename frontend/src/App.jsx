import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Certificate from "./pages/Certificate";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify/:certificateId" element={<Certificate />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;