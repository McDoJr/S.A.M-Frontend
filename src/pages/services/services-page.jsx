import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import ServicesSection from "./services-section.jsx";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import ScrollTop from "../../components/scroll-top.jsx";
import ExpertsSection from "./experts-section.jsx";

const ServicesPage = () => {

    useEffect(() => {
        setPageTitle("Services");
        scrollToTop();
    }, []);

    return (
        <>
            <Header/>
            <ServicesSection/>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default ServicesPage;