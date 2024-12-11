import { LightbulbIcon } from "lucide-react";

function BudgetPrediction() {
  return (
    <div className="mb-20">
      <h1 className="text-xl font-bold text-[#563007]"> बजट भविष्यवाणी</h1>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          {/* शीर्षक */}
          <thead>
            <tr className="border text-sm text-[#563007]">
              <th></th>
              <th>स्टेशन का नाम</th>
              <th>लागत </th>
              <th>भविष्यवाणी की गई लागत</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* पंक्ति 1 */}
            <tr>
              <th>1</th>
              <td>कीबोर्ड</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
            <tr>
              <th>2</th>
              <td>वॉकी-टॉकी</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
            <tr>
              <th>3</th>
              <td>वेबकैम</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary btn-md text-white px-8 absolute bottom-6 right-6 m-4 text-[16px] bg-[#b99f70]">
        <LightbulbIcon size={20} strokeWidth={0.75} /> भविष्यवाणी करें
      </button>
    </div>
  );
}

export default BudgetPrediction;
