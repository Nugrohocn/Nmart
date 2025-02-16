import { useState, useEffect, useRef } from "react";
import { getDataProducts } from "../../services/api";
import CardCategory from "../common/CardCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import CSS Swiper
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Ikon tombol geser

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const swiperRef = useRef(null); // Ref untuk mengontrol swiper

  useEffect(() => {
    getDataProducts((data) => {
      const uniqueCategories = [
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <div className="relative mt-4 w-full px-8  py-2">
      {/* Tombol Navigasi Manual */}
      <button
        onClick={() => swiperRef.current?.slidePrev()} // Geser ke kiri
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 md:hidden"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()} // Geser ke kanan
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 md:hidden"
      >
        <FaChevronRight className="text-gray-700" />
      </button>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Simpan instance swiper
        centeredSlides={false} // Tidak memusatkan kategori agar lebih rapi
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 2 }, // Mobile: 2 kategori
          768: { slidesPerView: 4 }, // Tablet/Desktop: 5 kategori
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="min-w-[150px] ">
            <CardCategory kategori={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
