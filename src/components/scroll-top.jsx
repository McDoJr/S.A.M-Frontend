import styles from "./scroll-top.module.css";
import {useEffect, useState} from "react";
import {FaCaretUp} from "react-icons/fa6";

const ScrollTop = () => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleListener = () => {
            setActive(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleListener);

        return () => {
            window.removeEventListener('scroll', handleListener);
        }
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }

    return <FaCaretUp className={`fixed right-[50px] bg-black rounded-[50%] text-white w-[45px] h-[45px] px-[10px] pt-[8px] pb-[6px] shadow-primary shadow-sm transition-all delay-100 ease-in cursor-pointer ${active ? "opacity-[1] bottom-[50px]" : "opacity-0 bottom-[70px]"}`} onClick={scrollToTop}/>
}

export default ScrollTop;