import { useState } from "react";

export default function Store() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Shoes", price: 50 },
    { id: 2, name: "Bag", price: 80 },
  ];

  const add = (p) => setCart([...cart, p]);

  return (
    <section className="space-y-4 animate-fadeIn theme-store page-wrap">
      <h2 className="text-2xl font-semibold accent-store">E-Commerce</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {products.map((p) => (
          <article
            key={p.id}
            className="card-store hover:shadow-lg transition"
          >
            <h3 className="font-medium">{p.name}</h3>
            <p className="text-sm text-gray-500">${p.price}</p>
            <button className="btn-store mt-2" onClick={() => add(p)}>
              Add
            </button>
          </article>
        ))}
      </div>

      <div className="card-store">
        <h3 className="font-medium">Cart ({cart.length})</h3>
        <ul className="text-sm list-disc pl-4">
          {cart.map((c, i) => (
            <li key={i}>{c.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
