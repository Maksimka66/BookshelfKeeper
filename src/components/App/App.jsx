import { Routes, Route } from "react-router-dom";

import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";

import "./App.css";
import FirstPage from "../../pages/FirstPage/FirstPage";

function App() {
  console.log(window.innerWidth);

  return (
    <>
      <FirstPage />
      <Routes>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
