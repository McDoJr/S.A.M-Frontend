import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import ServicesDetails from "./services-details.jsx";
import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {notNull, scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import ServicesBooking from "./services-booking.jsx";
import {DataContext} from "../context.js";
import ScrollTop from "../../components/scroll-top.jsx";

const ServicesOfferDetails = () => {

    const {user} = useContext(DataContext);
    const location = useLocation();

    useEffect(() => {
        setPageTitle("Services - Offer Details");
        scrollToTop();
    }, []);


    const index = location.state ? location.state.index : 0;
    const source = location.state && location.state.source ? location.state.source : "/services";


    return (
        <>
            <Header/>
            {notNull(user) ? <ServicesBooking index={index} source={source}/> : <ServicesDetails index={index} source={source}/>}
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default ServicesOfferDetails;