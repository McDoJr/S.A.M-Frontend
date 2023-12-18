import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {FaChevronRight} from "react-icons/fa6";
import {useLocation, useNavigate} from "react-router-dom";
import {formatString, scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import ScrollTop from "../../components/scroll-top.jsx";
import axios from "axios";
import {createBookingObject, DEFAULT_URL} from "../../utils/data.js";
import {useContext, useEffect, useState} from "react";
import {DataContext} from "../context.js";

const BookingPaymentPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {user, setUser} = useContext(DataContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setPageTitle("Booking Payment");
        scrollToTop();
    }, []);

    const formData = location.state.formData;

    const {address, city, state, zip_code, country, service, hours, price, total} = formData;

    const handleSubmit = () => {
        setLoading(true);
        axios.post(`${DEFAULT_URL}/api/bookings`, {data: formData})
            .then(res => {
                const id = res.data.data.id;
                const booking = createBookingObject({...res.data.data.attributes, id});
                const bookings = [...user.bookings, booking];
                setUser({...user, bookings});
                setLoading(false);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }

    return (
        <>
            <Header/>
            <section className="w-full py-[50px] px-[200px] flex flex-col">
                <div className="flex items-center mb-[40px]">
                    <h1 className="font-heading text-[30px] font-[400] mt-[5px]">Booking Details</h1>
                    <FaChevronRight className="w-[15px] h-[15px] mx-[10px] mb-[3px]"/>
                    <span className="font-heading text-[40px] font-[400]">Payment</span>
                </div>
                <div className="flex flex-col px-[60px] pt-[100px] pb-[60px] w-full bg-shade rounded-[41px] relative">
                    <h1 className="absolute top-[10px] left-[30px] text-[50px] font-[400] font-heading">Address Details</h1>
                    <span className="mx-auto text-[25px]">{address}, {city}, {state}, {zip_code}, {country}</span>
                </div>
                <div className="flex flex-col px-[50px] mt-[120px]">
                    <h1 className="font-heading text-[50px] font-[400] mb-[30px]">Payment Details</h1>
                    <div className="flex justify-between w-full">
                        <span className="font-[600]">Service:</span>
                        <span className="font-[600]">{formatString(service)}</span>
                    </div>
                    <div className="flex justify-between w-full mt-[5px]">
                        <span className="font-[600]">Price x Hour(s)</span>
                        <span className="font-[600]">₱ {new Intl.NumberFormat().format(price)}.00 x {hours} Hour(s)</span>
                    </div>
                    <div className="w-full border border-solid border-black mt-[20px]"></div>
                    <div className="flex justify-between w-full mt-[20px]">
                        <span className="text-[20px] font-[700]">Total</span>
                        <span className="text-[20px] font-[700]">₱ {new Intl.NumberFormat().format(total)}.00</span>
                    </div>
                </div>
                <div className="self-center font-[400] flex flex-col items-center mt-[100px]">
                    <h1 className="text-[90px] font-heading">Pay By</h1>
                    <img onClick={handleSubmit} className="cursor-pointer select-none scale-[.7] translate-y-[-40px]" src={require("../../images/gcash.png")} alt="gcash.png"/>
                </div>
            </section>
            <Footer/>
            {loading && (
                <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/95 z-[100]">
                    <div className="loader"></div>
                </div>
            )}
            <ScrollTop/>
        </>
    )
}
export default BookingPaymentPage;
