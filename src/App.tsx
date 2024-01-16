import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import ProtectedRoutesWrapper from "./pages/wrapper/ProtectedRoutesWrapper";
import WelcomeUser from "./pages/protected/WelcomeUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoutesWrapper />}>
          <Route path="/" element={<WelcomeUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
