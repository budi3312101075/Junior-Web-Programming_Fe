import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";

const Dashboard = () => {
  const [getMe, setGetMe] = useState();

  const getMes = async () => {
    try {
      const response = await axios.get(`/getMe`);
      setGetMe(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMes();
  }, []);
  return (
    <>
      <Sidebar>
        <div className="w-full h-full font-bold bg-primary p-10">
          <h1
            className={`text-2xl text-black font-extrabold mt-10  capitalize
            `}
          >
            Halo Selamat Datang {getMe?.username}
          </h1>
          <div className="w-full grid grid-cols-3 gap-4 h-60 font-bold bg-black p-10 rounded-lg mt-2">
            <div className="bg-quaternary w-full h-full rounded-lg"></div>
            <div className="bg-quaternary w-full h-full rounded-lg">
              <h1 className="text-black">Banyak Ekskul</h1>
            </div>
            {getMe?.is_admin === 1 ? (
              <div className="bg-quaternary w-full h-full rounded-lg">
                <h1 className="text-black">Banyak Siswa</h1>
              </div>
            ) : getMe?.is_admin === 0 ? (
              <div className="bg-quaternary w-full h-full rounded-lg">
                <h1 className="text-black">Anda Sudah Mendaftar Sebanyak</h1>
              </div>
            ) : null}
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
