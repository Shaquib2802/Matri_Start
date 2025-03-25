import React, { useState } from 'react'

const Sort = () => {
    const [selected, setSelected] = useState("Last Login");

  const options = [
    {
      title: "Last Login",
      desc: "Show recently logged-in members first",
    },
    {
      title: "Date Created",
      desc: "Show recently created profiles first",
    },
    {
      title: "Latest Photos",
      desc: "Show members who have added photos recently first",
    },
  ];

  return (
    <div className="max-w-sm border shadow-lg rounded-lg p-5 bg-white">
    <div className="flex border-b pb-2 mb-4">
      <div className="font-semibold text-gray-800 cursor-pointer border-b-2 border-transparent hover:border-black">
        Filter Profiles
      </div>
      <div className="ml-5 font-semibold text-gray-800 cursor-pointer border-b-2 border-teal-500">
        Sort Profiles
      </div>
    </div>

    <h2 className="font-semibold text-lg mb-4">Sort profiles on the basis of</h2>
    <div className="space-y-4">
      {options.map((opt) => (
        <div
          key={opt.title}
          className="flex items-start gap-3 cursor-pointer"
          onClick={() => setSelected(opt.title)}
        >
          <div
            className={`w-5 h-5 border-2 rounded-full mt-1 flex items-center justify-center ${
              selected === opt.title ? "border-orange-500" : "border-gray-400"
            }`}
          >
            {selected === opt.title && (
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            )}
          </div>
          <div>
            <p className="font-semibold">{opt.title}</p>
            <p className="text-gray-500 text-sm">{opt.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-full mt-6 hover:bg-orange-600">
      Apply
    </button>
  </div>
  )
}

export default Sort