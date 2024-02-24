import { useEffect } from "react";
import { POPULAR_MOVIES_API, OPTIONS } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPopular } from "../store/slices/moviesSlice";
import { useSelector } from "react-redux";


const usePopular = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const popular = useSelector((store) => store.movies.popular);


    /*eslint-disable */
    useEffect(() => {
        !popular && fetchPopularMovies();
    }, []);
    /*eslint-enable */

    const fetchPopularMovies = async () => {
        try {
            const data = await fetch(POPULAR_MOVIES_API, OPTIONS);
            const json = await data.json();
            dispatch(addPopular(json.results));
        } catch (error) {
            navigate("/error");
        }
    };

    return { popular }
}

export default usePopular