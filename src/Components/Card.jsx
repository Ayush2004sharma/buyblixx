import React, { useEffect, useState } from "react";

const Card = ({ product, onAddToWishlist }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle visibility when the card enters the viewport
  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.getElementById(product.id);
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);  // Set visibility to true when the card is in view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();  // Call on mount to check initial visibility

    return () => window.removeEventListener("scroll", handleScroll);
  }, [product.id]);

  return (
    <div
      id={product.id}
      className={`relative card border rounded-lg shadow-lg p-4 m-2 flex flex-col h-full group transition-transform duration-700 ease-in-out 
        ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
    >
      {/* Product Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Product Details (No overlap) */}
      <div className="flex flex-col justify-between p-4 space-y-2">
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="font-bold text-lg">{`$${product.price}`}</p>
      </div>

      {/* Add to Wishlist Button (Visible on hover) */}
      <div className="absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 flex flex-col items-center">
        <button
          onClick={() => onAddToWishlist(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Card;
