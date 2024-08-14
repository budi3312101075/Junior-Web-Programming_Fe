import React from "react";

const Modals = ({ children, title, reset }) => {
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-primary text-black max-w-xl flex flex-col gap-8">
          <h3 className="font-bold text-lg">{title}</h3>
          {children}
          <div className="grid grid-cols-2 gap-5">
            <button
              className="w-full rounded-lg bg-cyan-500 py-2"
              type="submit"
              form="modalForm"
            >
              Kirim
            </button>
            <button
              className="w-full rounded-lg bg-red-500 py-2"
              onClick={() => {
                document.getElementById("my_modal_1").close();
                reset();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modals;
