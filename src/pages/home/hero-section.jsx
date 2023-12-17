import styles from "./hero-section.module.css";
import {useNavigate} from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <h1>Experience Professional</h1>
                <h1>House Cleaning</h1>
                <span>We will clean it all for you!</span>
                <button onClick={() => navigate("/services")}>BOOK NOW</button>
            </div>
        </section>
    )
}

export default HeroSection;