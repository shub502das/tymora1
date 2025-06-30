import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    let pagePathName = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    },[pagePathName]);
    
    return null;
};

export default ScrollToTop;