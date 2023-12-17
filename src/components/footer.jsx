import styles from "./footer.module.css";
import {useNavigate} from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.left}>
                    <img src={require("../images/logo.png")} alt="logo.png"/>
                    <h2>S.A.M Cleaning Services</h2>
                </div>
                <div className={styles.right}>
                    <div>
                        <h2>Location</h2>
                        <span>Butuan City<br/>8600</span>
                    </div>
                    <h2 onClick={() => navigate("/services/experts")}>Cleaners</h2>
                    <div>
                        <h2>SAMCleaningServices@gmail.com</h2>
                        <span>0991 465 3006</span>
                    </div>
                </div>
                <p>© Copyright 2020. All rights reserved. S.A.M Cleaning Services</p>
            </div>
        </section>
    )
}

export default Footer;