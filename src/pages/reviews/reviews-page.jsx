import styles from "./reviews-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import ReviewSection from "../home/review-section.jsx";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import scrollTop from "../../components/scroll-top.jsx";
import ScrollTop from "../../components/scroll-top.jsx";

const ReviewsPage = () => {

    useEffect(() => {
        setPageTitle("Reviews");
        scrollToTop();
    }, []);

    return (
        <>
            <Header/>
            <ReviewSection/>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default ReviewsPage;