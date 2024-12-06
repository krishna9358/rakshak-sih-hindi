"use client";
import { Eye, Printer } from "lucide-react";
import React from "react";

function StationRecord() {
  return (
    <div className="mb-20">
      Station Record
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Station ID</th>
              <th>Station Name</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>1243</td>
              <td>MP Nagar Police Station, Bhopal</td>
              <td>
                <button
                  className="btn bg-transparent border-none "
                  onClick={() => {
                    const modal = document.getElementById(
                      "my_modal_1"
                    ) as HTMLDialogElement;
                    modal?.showModal();
                  }}
                >
                  <Eye className="bg-transparent" />
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>1243</td>
              <td>Police Thana Kamla Nagar, Bhopal</td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Webcam</td>
              <td>T.T. Nagar Police Station, Bhopal</td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-neutral-content text-white px-8 absolute bottom-6 right-10 m-4 text-[16px]">
        <Printer size={20} strokeWidth={0.75} /> Print
      </button>
    </div>
  );
}

export default StationRecord;
