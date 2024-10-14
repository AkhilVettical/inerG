import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/UserAuth/Signup";
import Login from "./components/UserAuth/Login";
import User from "./components/User/UserDetails";
import Task from "./components/Task/Task";
import Blank from "./components/Blank/Blank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Login />} />
        <Route path="/task" element={<Task />} />
        <Route path="/blank" element = {<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
