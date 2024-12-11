import { Eye } from "lucide-react";

function ResourceAllocation() {
  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]"> संसाधन आवंटन</h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* शीर्षक */}
          <thead>
            <tr className="text-sm border text-[#563007]">
              <th></th>
              <th>स्टेशन विवरण</th>
              <th>उत्पाद विवरण</th>
              <th>डिमांड विवरण</th>
              <th>पिक-अप विवरण</th>
              <th>राशि</th>
              <th>स्थिति</th>
              <th>पुष्टि</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* पंक्ति 1 */}
            <tr className="text-xs ">
              <th>1</th>
              <td>
                <ul className="space-y-2">
                <li>124</li>
                <li>
                एमपी नगर पुलिस स्टेशन, <br />
                भोपाल
                </li>
                </ul>
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
                  <div className="modal-box min-w-[700px] min-h-[500px] bg-white">
                      <table className="w-full">
                        <tr className="border text-sm">
                        <th></th>
                        <th>उत्पाद श्रेणी</th>
                        <th>मात्रा</th>
                        <th>स्थिति</th>
                        </tr>
                      </table>
                    <div className="modal-action ">
                      <form method="dialog  flex justify-end mt-auto">
                        {/* यदि फॉर्म में कोई बटन है, तो यह मोडल बंद कर देगा */}
                        <button className="btn  ">बंद करें</button>
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
              <td>₹ 3000</td>
              <td><div className="badge badge-primary badge-outline text-xs ">प्रक्रिया में</div></td>
              <td>
                <button className="btn btn-error btn-xs">रद्द करें</button>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Police Thana Kamla Nagar, <br />Bhopal</td>
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
              <td>₹ 3000</td>
              <td><div className="badge badge-success badge-outline text-xs ">Delivered</div></td>
              <td>
                {/* <button className="btn btn-error btn-xs"></button> */}
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>T.T. Nagar Police Station, <br/> Bhopal</td>
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
              <td>₹ 3000</td>
              <td><div className="badge badge-error badge-outline text-xs ">Not Available</div></td>
              <td>
                {/* <button className="btn btn-error btn-xs">Cancel</button> */}
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>T.T. Nagar Police Station, <br/> Bhopal</td>
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
              <td>₹ 3000</td>
              <td><div className="badge badge-neutral-content badge-outline text-xs ">Demand</div></td>
              <td>
                <button className="btn btn-primary btn-xs">Allocate</button>
              </td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResourceAllocation;
