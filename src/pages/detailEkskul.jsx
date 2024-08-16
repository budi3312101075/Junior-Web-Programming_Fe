import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DetailEkskul = () => {
  const [namaEkskul, setNamaEkskul] = useState();
  const [data, setData] = useState();
  const { id } = useParams();

  const getEkskul = async () => {
    try {
      const data = await axios.get(`/pendaftaran/${id}`);
      setData(data.data.data);
      setNamaEkskul(data.data.nama);
    } catch (error) {
      console.log(error);
    }
  };

  const deletedData = async (uuid) => {
    try {
      await axios.delete(`/pendaftaran/${uuid}`);
      getEkskul();
      toast.success("Data berhasil dihapus");
    } catch (error) {
      console.log(error);
    }
  };

  const approve = async (uuid) => {
    try {
      await axios.patch(`/approve/${uuid}`);
      getEkskul();
      toast.success("Data berhasil Diterima");
    } catch (error) {
      console.log(error);
    }
  };

  const disApprove = async (uuid) => {
    try {
      await axios.patch(`/disApprove/${uuid}`);
      getEkskul();
      toast.success("Data berhasil Ditolak");
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
            Detail Ekskul {namaEkskul}
          </h1>
          <div className="overflow-x-auto">
            <table className="table text-center rounded-lg overflow-hidden">
              <thead className="bg-base-200 text-white">
                <tr>
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
                    <tr key={index} className="last:rounded-b-lg">
                      <th className="text-center">{index + 1}</th>
                      <td>{dataItem?.username}</td>
                      <td>{dataItem?.kelas}</td>
                      <td>{dataItem?.deskripsi}</td>
                      <td>{dataItem?.status}</td>
                      <td className="flex flex-col items-center gap-2">
                        {dataItem?.status === "Diajukan" ? (
                          <>
                            <button
                              className="w-full bg-yellow-500 rounded-lg py-1"
                              onClick={() => approve(dataItem.uuid)}
                            >
                              Terima
                            </button>
                            <button
                              className="w-full bg-pink-500 rounded-lg py-1"
                              onClick={() => disApprove(dataItem.uuid)}
                            >
                              Tolak
                            </button>
                          </>
                        ) : dataItem?.status === "Diterima" ? (
                          <button
                            className="w-full bg-pink-500 rounded-lg py-1"
                            onClick={() => disApprove(dataItem.uuid)}
                          >
                            Tolak
                          </button>
                        ) : dataItem?.status === "Ditolak" ? (
                          <button
                            className="w-full bg-cyan-500 rounded-lg py-1"
                            onClick={() => approve(dataItem.uuid)}
                          >
                            Terima
                          </button>
                        ) : null}
                        <button
                          className="w-full bg-red-500 rounded-lg py-1"
                          onClick={() => deletedData(dataItem.uuid)}
                        >
                          Hapus
                        </button>
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
