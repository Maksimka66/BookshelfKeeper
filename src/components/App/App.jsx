import { Routes, Route } from "react-router-dom";

import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
