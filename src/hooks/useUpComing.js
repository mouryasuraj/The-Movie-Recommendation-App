import { useEffect } from "react";
import { UP_COMING_MOVIES_API, OPTIONS } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUpComing } from "../store/slices/moviesSlice";
import { useSelector } from "react-redux";


const useUpComing = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const upcoming = useSelector((store) => store.movies.upcoming);


    /*eslint-disable */
    useEffect(() => {
        !upcoming && fetchUpComingMovies();
    }, []);
    /*eslint-enable */

    const fetchUpComingMovies = async () => {
        try {
            const data = await fetch(UP_COMING_MOVIES_API, OPTIONS);
            const json = await data.json();
            dispatch(addUpComing(json.results));
        } catch (error) {
            navigate("/error");
        }
    };

    return { upcoming }
}

export default useUpComing