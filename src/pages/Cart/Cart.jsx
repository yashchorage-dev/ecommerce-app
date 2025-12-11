import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded mb-4 flex gap-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-green-600 font-bold">₹{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
