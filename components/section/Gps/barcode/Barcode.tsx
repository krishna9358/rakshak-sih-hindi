import { Printer } from "lucide-react";

export default function Barcode() {
  return (
    <div className="mb-20">
        Barcode
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Category</th>
              <th>Quantity</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Keyboard</td>
              <td>
                <input
                  type="number"
                  min={0}
                  className="input input-bordered input-sm w-20 "
                />
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Walkie-Talkie</td>
              <td>
                <input
                  type="number"
                  min={0}
                  className="input input-bordered input-sm w-20 "
                />
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Webcam</td>
              <td>
                <input
                  type="number"
                  min={0}
                  className="input input-bordered input-sm w-20 "
                />
              </td>
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
