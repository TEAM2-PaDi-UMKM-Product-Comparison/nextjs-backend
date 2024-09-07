// components/FilterSidebar.js
const FilterSidebar = () => {
    return (
      <div className="w-1/4 p-4 border-r">
        <h2 className="font-bold text-xl">Bandingkan Produk</h2>
        <ul className="mt-4 space-y-2">
          <li className="border-b pb-2">Harga</li>
          <li className="border-b pb-2">Dikirim dari</li>
          <li className="border-b pb-2">Rating</li>
          <li className="border-b pb-2">Terjual</li>
          <li className="border-b pb-2">Pajak</li>
          <li className="border-b pb-2">TKDN</li>
          {/* Add other filters as needed */}
        </ul>
      </div>
    );
  };
  
  export default FilterSidebar;
  