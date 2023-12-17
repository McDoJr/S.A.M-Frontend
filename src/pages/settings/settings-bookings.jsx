import styles from "./settings-bookings.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getBackground, getBookings, notNull, scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import {FaCaretLeft} from "react-icons/fa6";
import {DataContext} from "../context.js";
import axios from "axios";
import {DEFAULT_URL} from "../../utils/data.js";

const SettingsBookings = () => {

    const navigate = useNavigate();
    const {user, setUser} = useContext(DataContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setPageTitle("Settings - Bookings");
        scrollToTop();
    }, []);

    const handleCancel = (id) => {
        setLoading(true);
        axios.delete(`${DEFAULT_URL}/api/bookings/${id}`)
            .then(() => {
                const bookings = user.bookings.filter(booking => booking.id !== id);
                setUser({...user, bookings});
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }


    return (
        <>
            <Header/>
            <section className={styles.container}>
                <div className={styles.left}>
                    <span onClick={() => navigate("/settings/personal-information")}>Settings</span>
                    <span onClick={() => navigate("/settings/address")}>Address</span>
                    <span>Bookings <FaCaretLeft className="w-[50px] h-[50px] text-white absolute top-[3px] right-[-95px]"/></span>
                </div>
                <div className={styles.right}>
                    <h3>BOOKINGS</h3>
                    {notNull(user) ? user.bookings.map(({id, service, hours, date, time, price, total}, index) => {
                        return (
                            <div className={styles.card} key={index}>
                                <div>Booked</div>
                                <div className={styles.details}>
                                    <img src={getBackground(service)}/>
                                    <div>
                                        <h4>{service}</h4>
                                        <span>{`Hour/s: ${hours} Hour`}</span>
                                        <span>{`Date: ${date}`}</span>
                                        <span>{`Work Time: ${time}`}</span>
                                    </div>
                                    <h4>{`₱ ${total}.00`}</h4>
                                </div>
                                <button onClick={() => handleCancel(id)}>Cancel Booking</button>
                            </div>
                        )
                    }) : (
                        <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black/95">
                            <div className="loader"></div>
                        </div>
                    )}
                </div>
            </section>
            {loading && (
                <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/95">
                    <div className="loader"></div>
                </div>
            )}
            <Footer/>
        </>
    )
}

export default SettingsBookings;