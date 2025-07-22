import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages";
import DashboardPage from "./pages/dashboard";
import RequireAuth from "./RequireAuth"

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route element={<RequireAuth />} />
    <Route path="/dashboard" element={<DashboardPage />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App
