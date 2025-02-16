import Navbar from "../components/layout/Navbar";
import Categories from "../components/layout/Categories";
import CarouselBanner from "../components/layout/CarouselBanner";
import Products from "../components/layout/Products";

const Home = () => {
  return (
    <div className=" flex flex-col items-center">
      <Navbar />
      <Categories />
      <CarouselBanner />
      <Products />
    </div>
  );
};

export default Home;
