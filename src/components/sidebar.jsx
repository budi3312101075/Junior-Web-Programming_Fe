import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    register: registerss,
    handleSubmit: handleSubmitss,
    formState,
    reset: resetss,
  } = useForm();

  const { loginResponse, setLoginResponse, setLogOut } = useAuth();
  const [getMe, setGetMe] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setConfShowPassword] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  let role;
  let decoded;
  if (loginResponse) {
    const token = loginResponse;
    decoded = jwtDecode(token);
  }
  role = decoded?.is_admin;

  const toggleConfPasswordVisibility = () => {
    setConfShowPassword(!showConfPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getMes = async () => {
    try {
      const response = await axios.get(`/getMe`);
      setGetMe(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("kelas", data.kelas);
    if (data.photo) {
      formData.append("photo", data.photo[0]);
    }

    try {
      await axios.patch("/updateProfile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      getMes();
      reset();
      document.getElementById("my_modal_70").close();
      toast.success("Data Berhasil");
    } catch (error) {
      console.log(error);
    }
  };

  const resetPassword = async (data) => {
    try {
      await axios.patch(`/resetPassword`, data);
      resetss();
      document.getElementById("my_modal_69").close();
      toast.success("Password Berhasil");
    } catch (error) {
      resetss();
      toast.error("Password Gagal Diubah");
      document.getElementById("my_modal_69").close();
      console.log(error);
    }
  };

  useEffect(() => {
    getMes();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div className="dropdown mx-auto text-center relative">
              <div
                className="avatar mx-auto my-5 cursor-pointer"
                tabIndex={0}
                role="button"
                onClick={toggleDropdown}
              >
                <div className="w-24 rounded-full">
                  {getMe?.photo != null ? (
                    <img src={`http://localhost:5000/${getMe?.photo}`} />
                  ) : (
                    <img src="./../user.png" />
                  )}
                </div>
              </div>
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-48 bg-tertiary rounded-lg shadow-lg"
                >
                  <ul className="rounded-lg overflow-hidden">
                    <button
                      className="p-2  cursor-pointer"
                      onClick={() => {
                        document.getElementById("my_modal_70").showModal();
                      }}
                    >
                      Ubah Profile
                    </button>
                    <button
                      className="p-2  cursor-pointer"
                      onClick={() => {
                        document.getElementById("my_modal_69").showModal();
                      }}
                    >
                      Reset Password
                    </button>
                  </ul>
                </div>
              )}
            </div>

            <div
              className={`transition-all duration-300 ${
                dropdownOpen ? "mt-20" : "mt-0"
              }`}
            >
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
            </div>

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

      <dialog id="my_modal_70" className="modal">
        <div className="modal-box bg-primary text-black max-w-xl flex flex-col gap-8">
          <h3 className="font-bold text-lg">Ubah Profile</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full justify-center items-center rounded-xl"
          >
            <input
              defaultValue={getMe?.username}
              {...register("username", {
                required: "username harus diisi",
                pattern: {
                  value: /^[A-Za-z\s / -]+$/i,
                  message: "username hanya boleh mengandung huruf",
                },
              })}
              type="text"
              className={`input input-bordered w-full bg-primary border border-black placeholder:text-tertiary ${
                errors.username && "input-error"
              }`}
              placeholder="username"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}

            <input
              defaultValue={getMe?.kelas}
              {...register("kelas", {
                required: "Kelas harus diisi",
                pattern: {
                  required: true,
                  message: "Kelas harus diisi",
                },
              })}
              type="text"
              className={`input input-bordered  w-full bg-primary border border-black placeholder:text-tertiary ${
                errors.Kelas && "input-error"
              }`}
              placeholder="Kelas"
            />
            {errors.Kelas && (
              <span className="text-red-500 text-sm">
                {errors.Kelas.message}
              </span>
            )}

            <input
              {...register("photo", {
                pattern: {
                  message: "photo harus diisi",
                },
              })}
              type="file"
              className={`input input-bordered py-2 w-full bg-primary border border-black placeholder:text-tertiary ${
                errors.photo && "input-error"
              }`}
              placeholder="photo"
            />
            {errors.photo && (
              <span className="text-red-500 text-sm">
                {errors.photo.message}
              </span>
            )}
            <div className="flex w-full mt-2 gap-2">
              <button
                className="w-full rounded-lg bg-cyan-500 py-2 px-5"
                type="submit"
              >
                Kirim
              </button>
              <button
                className="w-full rounded-lg bg-red-500 py-2 px-5"
                onClick={() => {
                  document.getElementById("my_modal_70").close();
                  reset();
                }}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* reset Modal */}
      <dialog id="my_modal_69" className="modal">
        <div className="modal-box bg-primary text-black max-w-xl flex flex-col gap-8">
          <h3 className="font-bold text-lg">Reset Password</h3>
          <form
            onSubmit={handleSubmitss(resetPassword)}
            className="flex flex-col gap-5 w-full justify-center items-center rounded-xl"
          >
            {formState.errors.password && (
              <span className="text-red-600">Password harus diisi.</span>
            )}
            <div className="input input-bordered flex justify-between w-full gap-5 items-center bg-[#f2f4f6] border border-black focus-within:ring-1 focus-within:ring-black">
              <input
                type={showPassword ? "text" : "password"}
                {...registerss("password", { required: true })}
                placeholder="password"
                className="w-full bg-[#f2f4f6] -ml-2 placeholder:text-tertiary placeholder:tracking-widest placeholder:text-xs placeholder:font-bold"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  size={25}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <IoEyeSharp size={25} onClick={togglePasswordVisibility} />
              )}
            </div>

            {formState.errors.confpassword && (
              <span className="text-red-600">Password harus diisi.</span>
            )}
            <div className="input input-bordered flex justify-between w-full gap-5 items-center bg-[#f2f4f6] border border-black focus-within:ring-1 focus-within:ring-black">
              <input
                type={showConfPassword ? "text" : "password"}
                {...registerss("confpassword", { required: true })}
                placeholder="konfirmasi password"
                className="w-full bg-[#f2f4f6] -ml-2 placeholder:text-tertiary placeholder:tracking-widest placeholder:text-xs placeholder:font-bold"
              />
              {showConfPassword ? (
                <AiFillEyeInvisible
                  size={25}
                  onClick={toggleConfPasswordVisibility}
                />
              ) : (
                <IoEyeSharp size={25} onClick={toggleConfPasswordVisibility} />
              )}
            </div>

            <div className="flex w-full mt-2 gap-2">
              <button
                className="w-full rounded-lg bg-cyan-500 py-2 px-5"
                type="submit"
              >
                Kirim
              </button>
              <button
                className="w-full rounded-lg bg-red-500 py-2 px-5"
                onClick={() => {
                  document.getElementById("my_modal_69").close();
                  resetss();
                }}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Sidebar;
