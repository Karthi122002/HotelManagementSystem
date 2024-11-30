import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pages from "./pages/Index";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Landing from "./pages/landing";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
