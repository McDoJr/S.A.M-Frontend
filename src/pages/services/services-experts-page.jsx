import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import ScrollTop from "../../components/scroll-top.jsx";
import ExpertsSection from "./experts-section.jsx";

const ServicesExpertsPage = () => {
    useEffect(() => {
        setPageTitle("Services - Experts");
        scrollToTop();
    }, []);

    return (
        <>
            <Header/>
            <ExpertsSection/>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default ServicesExpertsPage;