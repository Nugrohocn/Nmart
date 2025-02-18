import Navbar from "../components/layout/Navbar";

const products = [
  { id: 1, name: "Kaos Polos", category: "Baju", price: 50000 },
  { id: 2, name: "Kemeja Flanel", category: "Baju", price: 120000 },
  { id: 3, name: "Jaket Denim", category: "Baju", price: 200000 },
  { id: 4, name: "Celana Jeans", category: "Celana", price: 180000 }, // Produk di luar kategori Baju
];

const CategoriesPage = () => {
  // Filter produk hanya yang kategori "Baju"
  const filteredProducts = products.filter(
    (product) => product.category === "Baju"
  );

  return (
    <div className=" mx-auto ">
      <Navbar />
      <h1 className="text-2xl font-bold my-4 px-4">Kategori: Baju</h1>
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
