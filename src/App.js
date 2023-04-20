import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
