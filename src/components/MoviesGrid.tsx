import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import useMovies, { Movies } from "../hooks/useMovies";
import SwiperComp from "./SwiperComp";
import usePopular, { Popular } from "../hooks/usePopular";
import MainMovie from "./MainMovie";

SwiperCore.use([Navigation, Pagination]);

interface Props {
  MovieData: Movies[];
  TopRateData: Popular[];
}

const MoviesGrid = ({ MovieData, TopRateData }: Props) => {
  return (
    <div className="flex flex-col gap-12 w-full">
      <MainMovie data={MovieData} />
      <SwiperComp delay={3000} title="Top Rated" results={MovieData} />
      <SwiperComp delay={4000} title="Discover more" results={TopRateData} />
    </div>
  );
};

export default MoviesGrid;
