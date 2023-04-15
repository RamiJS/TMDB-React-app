import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import useMovies from "../hooks/useMovies";
import SwiperComp from "./SwiperComp";
import usePopular from "../hooks/usePopular";
import MainMovie from "./MainMovie";

SwiperCore.use([Navigation, Pagination]);

const MoviesGrid = () => {
  const { data: movieData } = useMovies();
  const { data: popularData } = usePopular();
  return (
    <div className="flex flex-col gap-12">
      <MainMovie />
      <SwiperComp title="Top Rated" results={popularData} />
      <SwiperComp title="Discover more" results={movieData} />
    </div>
  );
};

export default MoviesGrid;
