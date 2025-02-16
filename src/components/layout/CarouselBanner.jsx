import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CarouselBanner = () => {
  return (
    <div className="container p-4  ">
      <div className="relative px-5">
        {/* Gambar Banner */}
        <img src="images/banner-1.jpg" alt="" className="rounded-lg w-full" />

        {/* Tombol Panah Kiri */}
        <button className="absolute top-1/2 left-1 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <BsChevronLeft className="text-blue-500 text-xl" />
        </button>

        {/* Tombol Panah Kanan */}
        <button className="absolute top-1/2 right-1 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <BsChevronRight className="text-blue-500 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CarouselBanner;
