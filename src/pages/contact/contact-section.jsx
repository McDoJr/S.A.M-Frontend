import styles from "./contact-section.module.css";
import {useState} from "react";
import {FaCircleCheck} from "react-icons/fa6";

const ContactSection = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
    }

    const handleClose = (e) => {
        if(e.target.id === "bg" || e.target.tagName === "P"){
            setSubmitted(false);
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.submit} id="bg" style={{display: submitted ? 'flex' : 'none'}} onClick={handleClose}>
                <div>
                    <p onClick={handleClose}>&times;</p>
                    <FaCircleCheck className={styles.icon}/>
                    <span>Submitted!</span>
                </div>
            </div>
            <h1>CONTACT US !</h1>
            <div className={styles.box}>
                <div className={styles.left}>
                    <div>
                        <img src={require("../../images/gmail.png")} alt="gmail.png"/>
                        <span>SAMcleaningServices@gmail.com</span>
                    </div>
                    <div>
                        <img src={require("../../images/phone.png")} alt="phone.png"/>
                        <span>0991-465-3006</span>
                    </div>
                    <div>
                        <span>Mondays to Saturdays</span>
                        <span>8:00 AM - 5:00 PM</span>
                    </div>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name"/>
                    <label>Email</label>
                    <input type="text" name="email"/>
                    <label>Phone Number</label>
                    <input type="number" name="phone"/>
                    <label>Message</label>
                    <textarea name="name"/>
                    <button>Submit</button>
                </form>
            </div>
            <h2>We will clean it all for you!</h2>
        </section>
    )
}

export default ContactSection;