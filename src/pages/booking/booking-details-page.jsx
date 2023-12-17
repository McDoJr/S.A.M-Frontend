import styles from "./booking-details-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import {DataContext} from "../context.js";
import axios from "axios";
import {createBookingObject} from "../../utils/data.js";
import {FaChevronRight} from "react-icons/fa6";
import ScrollTop from "../../components/scroll-top.jsx";

const BookingDetailsPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {user, setUser} = useContext(DataContext);
    const [data, setData] = useState(() => {
        return location.state ? location.state.data : {};
    });
    const [formData, setFormData] = useState({address: "", city: "", state: "", zip_code: "", country: ""});

    useEffect(() => {
        setPageTitle("Booking Details");
        scrollToTop();
    }, []);

    useEffect(() => {
        const {address, city, state, zip_code, country} = user;
        setFormData({address, city, state, zip_code, country});
    }, [user]);

    const {hours, date, time, service, price, aircon_type, quantity} = data;
    const totalPrice = parseFloat(price) * parseFloat(hours);
    const total = new Intl.NumberFormat().format(totalPrice);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingData = {user_id: user.id, service, hours: parseInt(hours), date, time,
            price: parseFloat(price), total: totalPrice, aircon_type, quantity: parseInt(quantity)};
        navigate("/booking/booking-details/payment", {state:{ formData: {...bookingData, ...formData}}});
        // const bookingData = {user_id: user.id, service, hours: parseInt(hours), date, time,
        //     price: parseFloat(price), total: totalPrice, aircon_type, quantity: parseInt(quantity)};
        // setFormData({address: "", city: "", state: "", zip_code: "", country: ""});
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <div className="flex items-center mb-40px]">
                    <h1 className="font-heading text-[40px] font-[400]">Booking Details</h1>
                    <FaChevronRight className="w-[15px] h-[15px] mx-[10px] mb-[3px]"/>
                    <span className="font-heading text-[30px] font-[400] mt-[5px]">Payment</span>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Address Details</h2>
                    <div className={styles.top}>
                        <div className={styles.field}>
                            <label>ADDRESS</label>
                            <input value={formData.address || ''} type="text" name="address" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>CITY</label>
                            <input value={formData.city || ''} type="text" name="city" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>STATE</label>
                            <input value={formData.state || ''} type="text" name="state" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>ZIP CODE</label>
                            <input value={formData.zip_code || ''} type="number" name="zip_code" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>COUNTRY</label>
                            <input value={formData.country || ''} type="text" name="country" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <h2>Booking Details</h2>
                        <h3>{service}</h3>
                        <div>
                            <span>{`Hour/s: ${hours} Hour`}</span>
                            <span>{`Select Date: ${date}`}</span>
                            <span>{`Select Work Time: ${time}`}</span>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h2>Payment Details</h2>
                        <div className={styles.box}>
                            <div>
                                <span>Service:</span>
                                <span>{service}</span>
                            </div>
                            <div>
                                <span>{`Price x Hour/s`}</span>
                                <span>{`₱ ${price} x 1 Hour`}</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>{`₱ ${total}.00`}</span>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Proceed to Payment</button>
                </form>
            </section>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default BookingDetailsPage;