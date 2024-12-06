function ResourceAllocation() {
  return (
    <div>
      <h1 className="text-xl font-bold"> Resource Allocation</h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sm border ">
              <th></th>
              <th>Station Details</th>
              <th>Product Details</th>
              <th>Demand Details</th>
              <th>Delivery Details</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="text-xs ">
              <th>1</th>
              <td>
                MP Nagar Police Station, <br />
                Bhopal
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>Keyboard</li>
                  <li>Walkie-Talkie</li>
                  <li>Webcam</li>
                </ul>
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
              <td><div className="badge badge-primary badge-outline text-xs ">In Process</div></td>
              <td>
                <button className="btn btn-error btn-xs">Cancel</button>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Police Thana Kamla Nagar, <br />Bhopal</td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>Keyboard</li>
                  <li>Walkie-Talkie</li>
                  <li>Webcam</li>
                </ul>
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
                <ul className="space-y-2 text-xs list-inside">
                  <li>Keyboard</li>
                  <li>Walkie-Talkie</li>
                  <li>Webcam</li>
                </ul>
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
                <ul className="space-y-2 text-xs list-inside">
                  <li>Keyboard</li>
                  <li>Walkie-Talkie</li>
                  <li>Webcam</li>
                </ul>
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
