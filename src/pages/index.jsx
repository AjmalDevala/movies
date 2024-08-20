import { Link, useLocation } from "react-router-dom";
import HeroMedia from "@/components/media/Hero";
import CarouselAutoQuery from "@/components/carousel/AutoQuery";
import { getMedia, listMedia } from "@/services/tmdb";
import { useEffect, useState, useCallback } from "react";
import { QUERY_LIST } from "@/constants/lists";
import TheFooter from "@/components/TheFooter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/store/movieSlice";

const MediaComponent = ({ isRoot = false }) => {
  const { pathname } = useLocation();
  const [item, setItem] = useState(null);
  const [media, setMedia] = useState([]);

  const type = pathname.includes("tv") ? "tv" : "movie";
  const queries = isRoot
    ? [QUERY_LIST.movie[0], QUERY_LIST.tv[0]]
    : QUERY_LIST[type];

  const getMediaList = useCallback(async () => {
    const mediaList = await Promise.all(
      queries.map((query) => listMedia(query.type, query.query, 1)),
    );
    setMedia(mediaList.map((media) => media.data.results));
  }, [queries]);

  useEffect(() => {
    getMediaList();
  }, [getMediaList]);

  const getHeroMedia = useCallback(
    async (id) => {
      const heroMedia = await getMedia(type, id);
      setItem(heroMedia.data);
    },
    [type],
  );

  useEffect(() => {
    if (media.length && media[0].length) {
      const id = media[0][0]?.id;
      getHeroMedia(id);
    }
  }, [media, getHeroMedia]);

  const value = useSelector((state) => state.movie.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="lg:flex justify-around p-2">
        <h1>{value}</h1>
        <button className="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        {value === 0 ? (
          <button className="button">Not Decrement</button>
        ) : (
          <button className="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        )}
        <Link to={`/login`}>
          <button className="gdbutton">Login</button>
        </Link>
      </div>

      <Link
        to={`/${type}/${item?.id || ""}`}
        className={!item?.id ? "hover:cursor-not-allowed" : ""}
        onClick={(e) => !item?.id && e.preventDefault()}
      >
        <HeroMedia type={type} item={item} />
      </Link>
      <CarouselAutoQuery media={media} queries={queries} />
      <TheFooter />
    </>
  );
};

export default MediaComponent;
