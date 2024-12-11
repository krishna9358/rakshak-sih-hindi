import Link from 'antd/es/typography/Link';
import React from 'react'

function ResourceRequest() {
  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]"> संसाधन अनुरोध</h1>
      <div className="overflow-x-auto">
        {/* शीर्ष अनुभाग: उत्पाद श्रेणी और मात्रा के लिए फॉर्म */}
        <div className="mb-4 mt-4">
          <form className="space-x-4" onSubmit={(e) => { e.preventDefault(); /* फॉर्म सबमिशन को संभालें */ }}>
            <input type="text" placeholder="उत्पाद श्रेणी" className="input input-warning bg-white" required />
            <input type="number" placeholder="मात्रा" className="input input-warning bg-white " required />
            <Link>
                      + आइटम जोड़ें
                    </Link>
            <button type="submit" className="btn bg-[#d2b99f] text-white">सबमिट करें</button>
            
          </form>
        </div>

        {/* निचला अनुभाग: स्लाइडर */}
        <div className="slider-section">
          <h2 className="text-lg font-bold text-[#563007]">उत्पाद सूची</h2>
          <div className="slider">
            {/* मौजूदा तालिका को यहाँ स्थानांतरित किया जा सकता है या आवश्यकतानुसार समायोजित किया जा सकता है */}
            <table className="table mt-4">
              {/* शीर्ष */}
              <thead>
                <tr className="border text-sm text-[#563007]">
                  <th></th>
                  <th>उत्पाद विवरण</th>
                  <th>शिपमेंट विवरण </th>
                  <th>स्थिति</th>
                </tr>
              </thead>
              <tbody>
                {/* पंक्ति 1 */}
                <tr className="text-[#563007]">
                  <th>1</th>
                  <td>कीबोर्ड <br/> माउस <br/> मॉनिटर</td>
                  <td>10/10/2003 <br/>  12:00 AM</td>
                  <td>
                    <div className="badge badge-success badge-outline text-xs ">
                      वितरित
                    </div>
                  </td>
                </tr>
                {/* अतिरिक्त पंक्तियाँ यहाँ गतिशील रूप से जोड़ी जा सकती हैं */}
              </tbody>
              <tfoot>
                <tr>
                  {/* <td colSpan={5} className="text-right">
                    
                  </td> */}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default ResourceRequest