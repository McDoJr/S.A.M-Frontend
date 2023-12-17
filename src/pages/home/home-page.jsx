import Header from "../../components/header.jsx";
import HeroSection from "./hero-section.jsx";
import DescriptionSection from "./description-section.jsx";
import ServicesSection from "./services-section.jsx";
import ReviewSection from "./review-section.jsx";
import Footer from "../../components/footer.jsx";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import ScrollTop from "../../components/scroll-top.jsx";


const HomePage = () => {

    useEffect(() => {
        setPageTitle("Home");
        scrollToTop();
    }, []);

    return (
        <>
            <Header/>
            <div className="w-[10px]"></div>
            <HeroSection/>
            <DescriptionSection/>
            <ServicesSection/>
            <ReviewSection/>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default HomePage;