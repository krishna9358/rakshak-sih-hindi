import Link from "antd/es/typography/Link";
import React from "react";

function RepairReplacement() {
  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]"> मरम्मत प्रतिस्थापन</h1>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr className="border text-sm text-[#563007]">
              <th></th>
              <th>उत्पाद श्रेणी</th>
              <th>अनुरोध की तिथि</th>
              <th>स्थिति</th>
              <th>क्रिया</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>कीबोर्ड</td>
              <td>10/10/2003</td>
              <td>
                <div className="badge badge-primary badge-outline text-xs ">
                  प्रक्रिया में
                </div>
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>वॉकी-टॉकी</td>
              <td>10/12/2023</td>
              <td>
                <div className="badge badge-success badge-outline text-xs ">
                  मरम्मत की गई
                </div>
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>वेबकैम</td>
              <td>10/12/2023</td>
              <td>
                <div className="badge badge-error badge-outline text-xs ">
                  विफल
                </div>
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>वेबकैम</td>
              <td>10/12/2023</td>
              <td>
                <div className="badge badge-secondary badge-outline text-xs ">
                  मरम्मत
                </div>
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className="text-right text-[#563007]">
                <Link className="text-[#563007]"
                  onClick={() => {
                    const modal = document.getElementById(
                      "my_modal_1"
                    ) as HTMLDialogElement;
                    modal?.showModal();
                  }}
                >
                  + आइटम जोड़ें
                </Link>
              </td>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white">
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      
                      <button className="btn bg-[#d2b99f] text-white">जमा करें</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </tr>
          </tfoot>
        </table>
        <button className="btn bg-[#d2b99f] btn-md text-white px-8 absolute bottom-6 right-6 m-4 text-[16px]">
          जमा करें
        </button>
      </div>
    </div>
  );
}

export default RepairReplacement;
