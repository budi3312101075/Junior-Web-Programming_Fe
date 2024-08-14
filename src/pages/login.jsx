import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { TbPassword } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const { setLoginResponse } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`/login`, data);

      if (response.data !== undefined && response.status === 200) {
        const userData = await response.data;
        setLoginResponse(userData.data);
        navigate("/");
        toast.success("Selamat Datang");
      }
    } catch (error) {
      toast.error("username atau password anda salah");
    }
  };

  return (
    <>
      <div className="hero bg-primary min-h-screen">
        <div className="hero-content flex-col">
          <TypeAnimation
            sequence={[
              "",
              600,
              "Silahkan",
              600,
              "Silahkan Login",
              600,
              "Silahkan Login Sekarang",
              600,
            ]}
            cursor={true}
            repeat={Infinity}
            className="text-lg font-bold lg:text-md text-black"
          />
          <div className="card bg-secondary w-full max-w-sm py-6 shadow-2xl">
            <form
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col px-10 mt-5 text-black gap-4"
            >
              {formState.errors.username && (
                <span className="text-red-600">
                  Hanya huruf dan angka yang diperbolehkan untuk Username
                </span>
              )}
              <div className="form-control">
                <h1 className="text-md">Username</h1>
                <div className="input input-bordered  flex justify-between w-full gap-5 items-center bg-[#f2f4f6]">
                  <FaUser />
                  <input
                    type="text"
                    className="w-full bg-[#f2f4f6] placeholder:text-tertiary"
                    {...register("username", {
                      required: true,
                      maxLength: 75,
                      pattern: /^[A-Za-z0-9]+$/i,
                    })}
                    placeholder="Masukan username anda"
                  />
                </div>
              </div>

              {formState.errors.password && (
                <span className="text-red-600">Password harus diisi.</span>
              )}
              <div className="form-control">
                <h1 className="text-md">Password</h1>
                <div className="input input-bordered flex justify-between w-full gap-5 items-center bg-[#f2f4f6]">
                  <TbPassword size={25} />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="Masukan password anda"
                    className="w-full bg-[#f2f4f6] -ml-2 placeholder:text-tertiary"
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
              </div>
              <button className="btn bg-black">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
