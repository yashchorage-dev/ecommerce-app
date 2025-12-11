import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSingleProduct } from "../../redux/slices/singleProductSlice";
import { addToCart } from "../../redux/slices/cartSlice";


const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.singleProduct
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]); // ✅ id only

  if (loading) return <p className="text-center">Loading product...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT: Product Image */}
        <div className="flex-1">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-80 object-cover rounded shadow"
          />

          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                className="w-20 h-20 object-cover rounded cursor-pointer border hover:border-black transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

          <p className="text-green-600 text-2xl font-bold mb-2">
            ₹{product.price}
          </p>

          <p className="text-yellow-500 mb-2">⭐ {product.rating}</p>

          <p className="text-sm text-gray-600 mb-4">Stock: {product.stock}</p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

            <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
