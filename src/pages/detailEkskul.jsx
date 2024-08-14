import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailEkskul = () => {
  const [nama, setNama] = useState();
  const [data, setData] = useState();
  const { id } = useParams();

  const getEkskul = async () => {
    try {
      const data = await axios.get(`/pendaftaran/${id}`);
      setData(data.data.data);
      setNama(data.data.nama);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEkskul();
  }, []);

  return (
    <>
      <Sidebar>
        <div className="w-full h-full font-bold bg-primary p-10">
          <h1 className="text-2xl text-black font-extrabold mb-16 mt-8">
            Detail Ekskul {nama}
          </h1>
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead>
                <tr className="bg-base-200 text-white">
                  <th className="text-center">No</th>
                  <th>Nama</th>
                  <th>Kelas</th>
                  <th>Deskripsi</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="text-black font-normal">
                {data && data.length > 0 ? (
                  data.map((dataItem, index) => (
                    <tr key={index}>
                      <th className="text-center">{index + 1}</th>
                      <td>{dataItem?.username}</td>
                      <td>{dataItem?.kelas}</td>
                      <td>{dataItem?.deskripsi}</td>
                      <td>{dataItem?.status}</td>
                      <td className="flex flex-col items-center gap-2">
                        <div className="flex w-full gap-1">
                          <button className="w-full bg-yellow-500 rounded-lg py-1">
                            Terima
                          </button>
                        </div>
                        <div className="flex w-full mt-auto">
                          <button className="w-full bg-red-500 rounded-lg py-1">
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      Data tidak ada
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default DetailEkskul;
