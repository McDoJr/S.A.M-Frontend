import styles from "./reviews-section.module.css";
import {FaQuoteLeft} from "react-icons/fa6";

const ReviewSection = () => {
    return (
        <section className={styles.container}>
            <h1>-REVIEWS-</h1>
            <div className={styles.middle}>
                <span>Read what our past customers said</span>
                <span>about our cleaning and services</span>
            </div>
            <div className={styles.bottom}>
                <div>
                    <FaQuoteLeft className={styles.icon}/>
                    <p>Christine and Kelly were incredibly quiet while
                        I was working from home. They were professional
                        and courteous and got to work right away , not
                        time  wasted. They asked me several questions
                        to ensure  things were being done as I wanted.
                        Great team, great service. Thanks!</p>
                    <span>- Willsam Doe -</span>
                </div>
                <div>
                    <FaQuoteLeft className={styles.icon}/>
                    <p>The staff were very friendly and <br/>professional.
                        Did a great job!</p>
                    <span>- Jerry Doe -</span>
                </div>
                <div>
                    <FaQuoteLeft className={styles.icon}/>
                    <p>Natty and Lyn did a great job of cleaning my
                        2 -storey home. They were professional,
                        efficient, friendly and I would highly
                        recommend. Thank you for the sanitized
                        services.</p>
                    <span>- Mark Walv -</span>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection;