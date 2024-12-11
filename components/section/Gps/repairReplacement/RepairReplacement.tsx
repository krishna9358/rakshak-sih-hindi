import React, { useState } from "react";

import { Eye } from "lucide-react";

function RepairReplacement() {
  const [selectedItem, setSelectedItem] = useState("मरम्मत");

  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]"> मरम्मत और प्रतिस्थापन</h1>
      <div>
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr className="text-sm border text-[#563007] ">
              <th></th>
              <th>स्टेशन विवरण</th>
              <th>उत्पाद विवरण</th>
              <th>अनुरोध विवरण</th>
              <th>शिपमेंट विवरण</th>
              {/* <th>स्थिति</th> */}
              {/* <th>पुष्टि</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr className="text-xs ">
              <th>1</th>
              <td>
                एमपी नगर पुलिस स्टेशन, <br />
                भोपाल
              </td>
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
                  <Eye className="bg-transparent text-primary" />
                </button>
                <dialog id="my_modal_1" className="modal ">
                  <div className="modal-box min-w-[700px] min-h-[500px] flex flex-col bg-white">
                    <form method="dialog" className="m-2">
                      {/* यदि फॉर्म में कोई बटन है, तो यह मोडल बंद कर देगा */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <table className="w-full">
                      <tr className="text-sm border">
                        <th></th>
                        <th>उत्पाद श्रेणी</th>
                        <th>उत्पाद आईडी</th>
                        <th>स्थिति</th>
                        <th>पुष्टि</th>
                      </tr>
                      <td>1</td>
                      <td>कीबोर्ड</td>
                      <td>PSJ323</td>
                      <td>
                        <div className="dropdown dropdown-hover ">
                          <div tabIndex={0} role="button" className="btn m-1 bg-[#b38b59] text-white">
                            {selectedItem}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-[#b38b59] text-white"
                          >
                            <li>
                              <a onClick={() => setSelectedItem("प्रतिस्थापित")}>
                                प्रतिस्थापित
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("मरम्मत")}>
                                मरम्मत
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("मरम्मत की गई")}>
                                मरम्मत की गई
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          className="checkbox text-xs "
                          defaultChecked
                        ></input>
                      </td>
                    </table>
                    <div className="modal-action mt-auto flex justify-end">
                      <form method="dialog">
                        <button className="btn" type="submit">
                          सबमिट करें
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
            </tr>
            {/* अन्य पंक्तियाँ */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RepairReplacement;
