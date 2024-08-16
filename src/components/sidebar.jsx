import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";

const Sidebar = ({ children }) => {
  const { loginResponse, setLoginResponse, setLogOut } = useAuth();
  const navigate = useNavigate();
  let role;
  let decoded;
  if (loginResponse) {
    const token = loginResponse;
    decoded = jwtDecode(token);
  }
  role = decoded?.is_admin;

  const handleLogout = async () => {
    const logout = await axios.get(`/Logout`);
    setLoginResponse(logout);
    navigate("/");
    setLogOut();
    toast.success("Logout Berhasil");
  };

  return (
    <>
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {children}
          <label htmlFor="my-drawer-2" className="mt-5 drawer-button sm:hidden">
            <GiHamburgerMenu size={26} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-black min-h-full w-80 p-4 text-white relative">
            <div className="avatar mx-auto my-5">
              <div className="w-24 rounded-full">
                <img src="./../user.png" />
              </div>
            </div>

            {role === 1 ? (
              <>
                <Link to="/" className="flex pl-20 items-center h-8 border-b">
                  Dashboard
                </Link>
                <Link
                  to="/ekskul"
                  className="flex pl-20 items-center h-8 border-b"
                >
                  Daftar Ekskul
                </Link>
                <Link
                  to="/siswa"
                  className="flex pl-20 items-center h-8 border-b"
                >
                  Daftar Data Siswa
                </Link>
              </>
            ) : role === 0 ? (
              <>
                <Link to="/" className="flex pl-20 items-center h-8 border-b">
                  Dashboard
                </Link>
                <Link
                  to="/ekskul"
                  className="flex pl-20 items-center h-8 border-b"
                >
                  Daftar Ekskul
                </Link>
                <Link
                  to="/riwayat"
                  className="flex pl-20 items-center h-8 border-b"
                >
                  Riwayat Pendaftaran
                </Link>
              </>
            ) : (
              <>maaf anda tidak punya akses</>
            )}

            <div className="absolute bottom-8 left-8">
              <button
                className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
