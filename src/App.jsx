import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import { useAuth } from "./store/auth";
import { jwtDecode } from "jwt-decode";
import Dashboard from "./pages/dahsboard";
import axios from "axios";
import DaftarSiswa from "./pages/daftarSiswa";
import DaftarEkskul from "./pages/daftarEkskul";
import DetailEkskul from "./pages/detailEkskul";
import Riwayat from "./pages/riwayat";
import Auth from "./pages/Auth/Auth";

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
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
