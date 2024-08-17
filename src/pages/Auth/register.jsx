import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Register = ({ togglePage }) => {
  const { register, handleSubmit, formState } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setConfShowPassword] = useState(false);

  const toggleConfPasswordVisibility = () => {
    setConfShowPassword(!showConfPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/register", data);
      togglePage();
      toast.success("Silahkan Login");
    } catch (error) {
      toast.error("Rigester Gagal");
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-md p-6 bg-quaternary flex flex-col items-center mx-auto my-auto">
      <h2 className="text-2xl font-extrabold tracking-wide  text-black -mb-1">
        Register
      </h2>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-10 mt-5 text-black gap-4 w-[450px] "
      >
        {formState.errors.username && (
          <span className="text-red-600">
            Hanya huruf dan angka yang diperbolehkan untuk Username
          </span>
        )}
        <div className="input input-bordered flex justify-between w-full gap-5 items-center bg-[#f2f4f6] border border-black focus-within:ring-1 focus-within:ring-black">
          <input
            type="text"
            className="w-full bg-[#f2f4f6] -ml-2 placeholder:text-tertiary placeholder:tracking-widest placeholder:text-xs placeholder:font-bold"
            {...register("username", {
              required: true,
              maxLength: 75,
              pattern: /^[A-Za-z0-9]+$/i,
            })}
            placeholder="username"
          />
        </div>

        {formState.errors.kelas && (
          <span className="text-red-600">
            Hanya huruf dan angka yang diperbolehkan untuk kelas
          </span>
        )}
        <div className="input input-bordered flex justify-between w-full gap-5 items-center bg-[#f2f4f6] border border-black focus-within:ring-1 focus-within:ring-black">
          <input
            type="text"
            className="w-full bg-[#f2f4f6] -ml-2 placeholder:text-tertiary placeholder:tracking-widest placeholder:text-xs placeholder:font-bold"
            {...register("kelas", {
              required: true,
              maxLength: 75,
              pattern: /^[A-Za-z0-9]+$/i,
            })}
            placeholder="kelas"
          />
        </div>

        {formState.errors.password && (
          <span className="text-red-600">Password harus diisi.</span>
        )}
        <div className="input input-bordered flex justify-between w-full gap-5 items-center bg-[#f2f4f6] border border-black focus-within:ring-1 focus-within:ring-black">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            placeholder="password"
            className="w-full bg-[#f2f4f6] -ml-2 placeholder:text-tertiary placeholder:tracking-widest placeholder:text-xs placeholder:font-bold"
          />
          {showPassword ? (
            <AiFillEyeInvisible size={25} onClick={togglePasswordVisibility} />
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
            {...register("confpassword", { required: true })}
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

        <button className="btn bg-black">Login</button>
      </form>
      <p className="mt-4 text-blue-500 cursor-pointer" onClick={togglePage}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Register;
