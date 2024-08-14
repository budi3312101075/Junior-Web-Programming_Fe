import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import { useAuth } from "./store/auth";
import { jwtDecode } from "jwt-decode";
import Dashboard from "./pages/dahsboard";
import axios from "axios";
import DaftarSiswa from "./pages/daftarSiswa";
import DaftarEkskul from "./pages/daftarEkskul";
import DetailEkskul from "./pages/detailEkskul";

const App = () => {
  const { loginResponse } = useAuth();
  let role;
  let decoded;

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  if (loginResponse) {
    const token = loginResponse;
    decoded = jwtDecode(token);
  }

  role = decoded?.is_admin;

  if (role === 1) {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/siswa" element={<DaftarSiswa />} />
        <Route path="/ekskul" element={<DaftarEkskul />} />
        <Route path="/detail-ekskul/:id" element={<DetailEkskul />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  if (role === 0) {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ekskul" element={<DaftarEkskul />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
