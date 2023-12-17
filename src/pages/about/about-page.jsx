import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import AboutSection from "./about-section.jsx";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import ScrollTop from "../../components/scroll-top.jsx";

const AboutPage = () => {

    useEffect(() => {
        setPageTitle("About");
        scrollToTop();
    }, []);

    return (
        <>
            <Header/>
            <AboutSection/>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default AboutPage;