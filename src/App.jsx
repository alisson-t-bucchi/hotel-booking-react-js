import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App
