"use client";
import { Eye } from "lucide-react";
import React from "react";

function StationRecord() {
  return (
    <div className="mb-20">
      <div className="flex justify-between mb-4">
        <div><h1 className="text-xl font-bold text-[#563007]"> स्टेशन रिकॉर्ड</h1></div>
        <div className="bg-white">
          <label className="input input-bordered flex items-center h-9">
            <input type="text" className="input input-white bg-white  " placeholder="खोजें"  />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border text-sm text-[#563007]">
              <th></th>
              <th>स्टेशन आईडी</th>
              <th>स्टेशन नाम</th>
              <th>देखें</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>1243</td>
              <td>एमपी नगर पुलिस स्टेशन, भोपाल</td>
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
                  <Eye className="bg-transparent text-[#563007]" />
                </button>
                <dialog id="my_modal_1" className="modal ">
                  <div className="modal-box bg-white">
                    <table className="table">
                      {/* head */}
                      <thead className="text-[#563007]">
                        <tr>
                          <th></th>
                          <th>उत्पाद का नाम</th>
                          <th>स्थिति</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>कीबोर्ड</td>
                          <td>
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              कार्यरत
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>वॉकी-टॉकी</td>
                          <td>
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              कार्यरत
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>वेबकैम</td>
                          <td>
                            <div className="badge badge-error gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-4 w-4 stroke-current"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                              क्षतिग्रस्त
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">बंद करें</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
            </tr>
            {/* ... existing code ... */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StationRecord;