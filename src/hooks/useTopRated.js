import { useEffect } from "react";
import { TOP_RATED_MOVIES_API, OPTIONS } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTopRated } from "../store/slices/moviesSlice";
import { useSelector } from "react-redux";


const useTopRated = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const topRated = useSelector((store) => store.movies.topRated);


    /*eslint-disable */
    useEffect(() => {
        !topRated && fetchTopRatedMovies();
    }, []);
    /*eslint-enable */

    const fetchTopRatedMovies = async () => {
        try {
            const data = await fetch(TOP_RATED_MOVIES_API, OPTIONS);
            const json = await data.json();
            dispatch(addTopRated(json.results));
        } catch (error) {
            navigate("/error");
        }
    };

    return { topRated }
}

export default useTopRated