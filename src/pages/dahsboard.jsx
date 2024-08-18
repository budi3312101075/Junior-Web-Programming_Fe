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
          <div className="w-full h-64 mt-5 rounded-lg shadow-md border border-gray-300 bg-quaternary flex ">
            <div className="flex flex-col gap-4 w-[700px] text-black px-10  ">
              <h1
                className={`text-2xl text-black font-extrabold mt-10 capitalize `}
              >
                Halo Selamat Datang <br /> {getMe?.username}
              </h1>

              <h1 className="text-base font-medium tracking-wide font-sans ">
                Kelas : {getMe?.kelas}
              </h1>
            </div>
            <video
              autoPlay
              loop
              muted
              className="w-full rounded-r-lg object-cover"
            >
              <source src="./sma.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
