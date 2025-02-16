import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const ProductPage = () => {
  const params = useParams();
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-10">
        {/* Gambar Produk */}
        <div className="w-full h-96 overflow-hidden">
          <img
            src="images/samsung.jpg"
            alt="Samsung S23 Ultra"
            className="w-full h-full object-cover md:object-contain"
          />
        </div>

        {/* Detail Produk */}
        <div className="p-6">
          {/* Harga dan Rating */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Rp. 2.000.000</h1>
            <h2 className="text-lg text-yellow-500 font-semibold flex items-center">
              ⭐ 4.5 / 5
            </h2>
          </div>

          {/* Nama dan Kategori Produk */}
          <h2 className="text-2xl font-semibold mt-2">Samsung S23 Ultra</h2>
          <h3 className="text-lg text-gray-800">Kategori: Smartphone</h3>

          {/* Deskripsi Produk */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eligendi beatae architecto eos quaerat. Expedita consectetur
            laboriosam porro fugit id quisquam quas possimus aspernatur
            reprehenderit perspiciatis esse, dolorum dolore dolor!
          </p>

          {/* Tombol Add to Cart */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg text-white p-3 mt-6 text-lg font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
