import { RefreshCw } from 'lucide-react'
import React from 'react'

function Credentials() {
  return (
    <div className="">
            <h1 className="text-xl font-bold text-[#563007] "> क्रेडेंशियल्स</h1>
            <div className='mt-4 '>
              <form className='space-y-2'>
              <input type="text" placeholder="ईमेल" className="input input-bordered input-warning bg-white w-full max-w-xs mr-4  text-black" />
              <input type="password" placeholder="पासवर्ड" className="input input-bordered input-warning bg-white w-full max-w-xs " /> <br/>
              <div className="flex-1 space-x-4">
                <input type="password" placeholder="स्टेशन/GPS नाम" className="input input-bordered input-warning w-full max-w-xs bg-white" />
                <select className="select select-bordered select-warning text-gray-400 w-full max-w-xs mt-2 bg-white">
                  <option disabled selected>उपयोगकर्ता प्रकार</option>
                  <option value="station">स्टेशन</option>
                  <option value="gps">GPS</option>
                </select>
              </div>
            <button type="submit" className="btn bg-[#d2b99f] w-[150px] text-white">जमा करें</button>
            </form>

            </div>
            <div>
              <h1 className="text-xl font-bold mt-4 text-[#563007]">इतिहास</h1>
              <table className='table mt-4 border-2 rounded border-[#d2b99f]'>
              <thead>
            <tr className="border text-sm border-[#d2b99f] text-[#563007] ">
              <th></th>
              <th>ID</th>
              <th>नाम</th>
              <th>प्रकार</th>
              <th>ईमेल</th>
              <th>पासवर्ड</th>
              <th>अपडेट किया गया</th>
            </tr>
          </thead>
          <tbody className='text-[#563007]'>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>sjadl0</td>
              <td>
                भोपाल पुलिस स्टेशन
              </td>
              <td>
              <div className="badge badge-primary badge-outline text-xs ">स्टेशन</div>
              </td>
              <td>
              station.bhopalpolice@rakshak.com
              </td>
              <td>
                bhopal@1234 
                <RefreshCw className='text-sm' />
              </td>
              <td>10/12/2024</td>
            </tr>
          </tbody>

              </table>
            </div>

    </div>
  )
}

export default Credentials