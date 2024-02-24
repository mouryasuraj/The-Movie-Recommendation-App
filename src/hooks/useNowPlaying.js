import { useEffect } from "react";
import { NOW_PLAYING_MOVIES_API, OPTIONS } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../store/slices/moviesSlice";
import { useSelector } from "react-redux";


const useNowPLaying = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const nowPlaying = useSelector((store) => store.movies.nowPlaying);



    /*eslint-disable */
    useEffect(() => {
        !nowPlaying && fetchNowPlayingMovies();
    }, []);
    /*eslint-enable */

    const fetchNowPlayingMovies = async () => {
        try {
            const data = await fetch(NOW_PLAYING_MOVIES_API, OPTIONS);
            const json = await data.json();
            dispatch(addNowPlaying(json.results));
        } catch (error) {
            navigate("/error");
        }
    };

    return { nowPlaying }
}

export default useNowPLaying