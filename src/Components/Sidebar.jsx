const Sidebar = () => {
  return (
    <div className="absolute left-0 mt-7 bg-white shadow-2xl  w-80 p-4 space-y-2 z-40">
      <ul className="space-y-7 text-gray-700 font-semibold text-xl">
        <li className="hover:text-blue-500 cursor-pointer">Women</li>
        <li className="hover:text-blue-500 cursor-pointer">Men</li>
        <li className="hover:text-blue-500 cursor-pointer">Kids</li>
        <li className="hover:text-blue-500 cursor-pointer">Adults</li>
      </ul>
    </div>
  );
};

export default Sidebar;
