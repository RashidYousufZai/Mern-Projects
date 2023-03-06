import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.scss';
// componets
import Navbar from "./component/Navbar"
import AllUser from "./component/AllUser"
import AddUser from "./component/AddUser"
import Home from "./component/Home"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/all-user" element={<AllUser />} />
      </Routes >
    </BrowserRouter >
  );
}

export default App;
