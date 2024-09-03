import React from 'react';

const Sidebar = () => {
  return (
    <aside className="col-span-1 bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>
      <div className="space-y-4">
        {/* Example Filter Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Harga</label>
          <input type="range" className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Dikirim dari</label>
          <select className="w-full border border-gray-300 rounded p-2">
            <option>Jakarta Timur</option>
            <option>Bandung</option>
            <option>Surabaya</option>
          </select>
        </div>
        {/* Add more filters as needed */}
      </div>
    </aside>
  );
};

export default Sidebar;
