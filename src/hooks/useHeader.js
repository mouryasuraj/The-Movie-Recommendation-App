import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
import { useSelector } from "react-redux";

const useHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const menuBar = useRef();
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.theme.theme);

    const handleTheme = () => {
        dispatch(toggleTheme());
    };

    const handleMenuBar = () => {
        if (isMenuOpen) {
            menuBar.current.style.right = "0";
            setIsMenuOpen(false);
        } else {
            menuBar.current.style.right = "-100%";
            setIsMenuOpen(true);
        }
    };

    return { isMenuOpen, setIsMenuOpen, menuBar, theme, handleMenuBar, handleTheme }
}

export default useHeader