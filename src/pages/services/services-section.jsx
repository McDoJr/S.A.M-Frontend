import styles from "./services-section.module.css";
import ServiceCard from "./service-card.jsx";
import {cards} from "../../utils/utils.jsx";
import {useNavigate} from "react-router-dom";

const ServicesSection = () => {
    const navigate = useNavigate();

    const handleClick = (index) => {
        navigate("/services/offer-details", {state:{index: index}});
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.top}>
                    <h1>SERVICES</h1>
                </div>
                <div className="w-full pt-[50px] pb-[150px] px-[150px] flex justify-center items-center flex-wrap">
                    {cards.map(({heading, background}, index) => {
                        return <ServiceCard heading={heading} background={background} index={index} margin="mt-[100px] mx-[60px]" color="#35C2CB" align="start" handleClick={handleClick} key={index}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default ServicesSection;