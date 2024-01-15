import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutesWrapper from "./pages/protected/ProtectedRoutesWrapper";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoutesWrapper />}>
          <Route path="/welcome" />
          <Route path="/wather" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
