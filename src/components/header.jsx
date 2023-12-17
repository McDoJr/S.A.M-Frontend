import styles from "./header.module.css";
import {Link, useNavigate} from "react-router-dom";
import {loggedIn, notNull} from "../utils/utils.jsx";
import {useContext, useEffect, useRef, useState} from "react";
import {FaCaretDown} from "react-icons/fa6";
import {DataContext} from "../pages/context.js";

const Header = () => {

    const navigate = useNavigate();
    const ref = useRef(null);
    const {user, handleLogout} = useContext(DataContext);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleListener = (e) => {
            if(!ref.current?.contains(e.target)) {
                setShow(false);
            }
        }

        document.addEventListener('click', handleListener);

        return () => {
            document.removeEventListener('click', handleListener);
        }
    }, []);

    const handleToggle = () => {
        setShow(!show);
    }

    const logoutUser = () => {
        handleLogout();
        navigate("/");
    }

    const handleSetings = () => {
        setShow(false);
        navigate("/settings/personal-information");
    }

    const account = (
        <>
            <div ref={ref} className="py-[10px] px-[30px] text-[16px] bg-primary font-body outline-0 rounded-[3px] cursor-pointer flex relative select-none" onClick={handleToggle}>
                {user.username} <FaCaretDown className="ml-[10px]"/>
                <ul style={{display: show ? "flex" : "none"}} className="flex flex-col w-full absolute left-0 top-[44px] z-10 bg-black">
                    <li className="w-full py-[10px] px-[30px] bg-primary hover:bg-[#FF9E6F]" onClick={handleSetings}><span className="">Settings</span></li>
                    <li className="w-full py-[10px] px-[30px] bg-primary hover:bg-[#FF9E6F]" onClick={logoutUser}><span>Logout</span></li>
                </ul>
            </div>
        </>
    )

    return (
        <section className={styles.container}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <img src={require("../images/logo.png")} alt="logo.png"/>
                <h1>S.A.M Cleaning Services</h1>
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            {notNull(user) ? account : <button className="py-[10px] px-[30px] text-[16px] bg-primary font-body outline-0 rounded-[3px] cursor-pointer relative" onClick={() => navigate("/signin")}>Login</button>}
        </section>
    )
}

export default Header;