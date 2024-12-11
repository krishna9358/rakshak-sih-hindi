import {  ArrowBigRight } from 'lucide-react';
import React from 'react'

function PurchaseList() {
  return (
    <div>
        <div className="flex justify-between mb-4">
        <div><h1 className="text-xl font-bold text-[#563007]"> खरीद सूची</h1></div>
        <div>
          <label className="input input-bordered flex items-center h-9">
            <input type="text" className="bg-white" placeholder="खोजें"  />
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
          <thead className='bg-[#b38b59] text-white'>
            <tr className="border text-sm">
              <th></th>
              <th>उत्पाद का नाम</th>
              <th>मात्रा</th>
            </tr>
          </thead>
          <tbody className='text-[#563007]'>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>कीबोर्ड</td>
              <td>10</td>
            </tr>
            <tr>
              <th>2</th>
              <td>माउस</td>
              <td>50</td>
            </tr>
            <tr>
              <th>3</th>
              <td>वेबकैम</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer">
        <button className="btn bg-[#b38b59] btn-md text-white px-8 absolute bottom-6 right-6 m-4 text-[16px]">
          <ArrowBigRight size={20} strokeWidth={0.75} /> GEM पोर्टल
        </button>
      </a>
    </div>
  )
}

export default PurchaseList;