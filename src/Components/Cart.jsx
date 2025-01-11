import React from "react";

const CartComponent = ({ cartItems }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p className="text-gray-500">No items in the cart.</p>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {cartItems.map((item) => (
        <div key={item.id} className="w-1/4 p-2 border rounded-lg shadow">
          <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
          <div className="mt-2">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-blue-500 font-bold mt-1">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;