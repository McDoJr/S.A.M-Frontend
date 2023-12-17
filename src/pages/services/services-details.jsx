import styles from "./services-details.module.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {cards, scrollToTop, services} from "../../utils/utils.jsx";
import ServiceCard from "./service-card.jsx";
import {FaChevronLeft} from "react-icons/fa6";

const ServicesDetails = ({index, source}) => {

    const navigate = useNavigate();

    const [selectedService, setSelectedService] = useState(services[index]);

    let otherServices = cards.filter((card) => card.name !== selectedService.heading);

    let {image1, heading, price, description, cleaner1Image, cleaner1Name, cleaner1Age,
        cleaner2Image, cleaner2Name, cleaner2Age, inclusions, exclusions} = selectedService;

    const handleClick = (index) => {
        const selectedNewService = services.filter(service => service.heading === otherServices[index].name)[0];
        setSelectedService(selectedNewService);
        scrollToTop();
    }

    return (
        <>
            <section className={styles.container}>
                <FaChevronLeft className="absolute top-[30px] left-[80px] w-[75px] h-[45px] bg-blue text-white cursor-pointer py-[8px] px-[10px]" onClick={() => navigate(source)}/>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <img src={image1} alt="cleaning.png"/>
                        <div>
                            <span>Transportation Fees</span>
                            <p>Please note that all website bookings are exclusive of transportation fees to and from our headquarters. We will charge transportation depending on your location.</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.row}>
                            <span>S.A.M Cleaning Services</span>
                            <h2>{heading}</h2>
                            <span>{price}</span>
                        </div>
                        <div className={styles.row}>
                            <span>Description</span>
                            <span>{description}</span>
                        </div>
                        <div className={styles.row}>
                            <h3>Cleaners</h3>
                            <div>
                                <img src={cleaner1Image}/>
                                <div>
                                    <span>Name: {cleaner1Name}</span>
                                    <span>{`Age: ${cleaner1Age} years old`}</span>
                                </div>
                            </div>
                            <div>
                                <img src={cleaner2Image}/>
                                <div>
                                    <span>Name: {cleaner2Name}</span>
                                    <span>{`Age: ${cleaner2Age} years old`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div>
                        <span>Inclusions:</span>
                        <p>Our SAM Cleaning Services includes the following:</p>
                        {inclusions.map((value, index) => <p key={index}>{value}</p>)}
                    </div>
                    <div>
                        <span>Exclusions:</span>
                        <p>The SAM Cleaning Services does not include:</p>
                        {exclusions.map((value, index) => <p key={index}>{value}</p>)}
                    </div>
                </div>
            </section>
            <div className={styles.bottom}>
                <h1>OTHER SERVICES OFFERED</h1>
                <div>
                    {otherServices.map(({heading, background}, index) => {
                        return <ServiceCard heading={heading} background={background} index={index} margin="50px 30px 0 30px" color="#D9D9D9" align="start" handleClick={handleClick} key={index}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default ServicesDetails;