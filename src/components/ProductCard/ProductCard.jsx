import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="border p-4 rounded shadow hover:shadow-lg transition">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover rounded mb-3"
        />
        <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
        <p className="text-green-600 font-bold">₹{product.price}</p>
        <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
        <p className="text-xs text-gray-500 mt-1">{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
