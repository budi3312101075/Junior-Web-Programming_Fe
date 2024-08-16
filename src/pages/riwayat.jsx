import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useAuth } from "../store/auth";
import { jwtDecode } from "jwt-decode";

const Riwayat = () => {
  const { loginResponse } = useAuth();
  const [data, setData] = useState();

  let username;
  let decoded;
  if (loginResponse) {
    const token = loginResponse;
    decoded = jwtDecode(token);
  }
  username = decoded?.username;

  const getData = async () => {
    try {
      const response = await axios.get("/riwayatPendaftaran");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Sidebar>
        <div className="w-full h-full font-bold bg-primary p-10">
          <h1 className="text-2xl text-black font-extrabold mt-10 -mb-7">
            Riwayat Pendaftaran Ekskul {username}
          </h1>
          <div className="overflow-x-auto mt-10">
            <table className="table text-center rounded-lg overflow-hidden">
              <thead className="rounded-t-lg overflow-hidden">
                <tr className="bg-base-200 text-white">
                  <th className="text-center">No</th>
                  <th>Nama Ekskul</th>
                  <th>Kelas</th>
                  <th>Deskripsi</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-black font-normal">
                {data?.map((item, index) => (
                  <tr key={index} className="last:rounded-b-lg">
                    <th className="text-center">{index + 1}</th>
                    <td>{item?.namaEkskul}</td>
                    <td>{item?.kelas}</td>
                    <td>{item?.deskripsi}</td>
                    <td>{item?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Riwayat;
