import { LightbulbIcon } from "lucide-react";

function BudgetPrediction() {
  return (
    <div className="mb-20">
      Budget Prediction
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Station Name</th>
              <th>Cost </th>
              <th>Predicted Cost</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Keyboard</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Walkie-Talkie</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Webcam</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-neutral-content text-white px-8 absolute bottom-6 right-10 m-4 text-[16px]">
        <LightbulbIcon size={20} strokeWidth={0.75} /> Predict
      </button>
    </div>
  );
}

export default BudgetPrediction;
