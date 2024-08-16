import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { toast } from "react-toastify";

const DaftarSiswa = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get("/users");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ubahRole = async (id) => {
    try {
      const response = await axios.patch(`/users/${id}`);
      getData();
      toast.success(response.data.msg);
    } catch (error) {
      toast.error("Data Gagal Diubah!!!");
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`/users/${id}`);
      getData();
      toast.success(response.data.msg);
    } catch (error) {
      toast.error("Data Gagal Dihapus!!!");
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
            Daftar Siswa
          </h1>
          <div className="overflow-x-auto mt-10">
            <table className="table text-center rounded-lg overflow-hidden">
              <thead className="bg-base-200 text-white">
                <tr>
                  <th className="text-center">No</th>
                  <th>Nama</th>
                  <th>Kelas</th>
                  <th>Role</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="text-black font-normal capitalize">
                {data?.map((item, index) => (
                  <tr key={index} className="last:rounded-b-lg">
                    <th>{index + 1}</th>
                    <td>{item?.username}</td>
                    <td>{item?.kelas}</td>
                    <td>{item?.role}</td>
                    <td className="w-36">
                      <div className="flex flex-col gap-1">
                        {item.role === "Siswa" ? (
                          <button
                            className="bg-cyan-500 py-1 rounded-lg w-24 mx-auto"
                            onClick={() => {
                              ubahRole(item.uuid);
                            }}
                          >
                            Ubah Admin
                          </button>
                        ) : item.role === "Admin" ? (
                          <button
                            className="bg-yellow-500 py-1 rounded-lg w-24 mx-auto"
                            onClick={() => {
                              ubahRole(item.uuid);
                            }}
                          >
                            Ubah Siswa
                          </button>
                        ) : null}
                        <button
                          className="bg-red-500 py-1 rounded-lg w-24 mx-auto"
                          onClick={() => {
                            deleteUser(item.uuid);
                          }}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
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

export default DaftarSiswa;
