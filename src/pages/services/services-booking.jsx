import styles from "./services-booking.module.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {cards, scrollToTop, services} from "../../utils/utils.jsx";
import ServiceCard from "./service-card.jsx";
import {FaChevronLeft} from "react-icons/fa6";

const ServicesBooking = ({index, source}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({hours: "", date: "", time: "", aircon_type: "", quantity: ""});
    const [selectedService, setSelectedService] = useState(services[index]);

    let otherServices = cards.filter((card) => card.name !== selectedService.heading);

    let {image1, heading, price, description, cleaner1Image, cleaner1Name, cleaner1Age,
        cleaner2Image, cleaner2Name, cleaner2Age, inclusions, exclusions} = selectedService;

    const handleClick = (index) => {
        const selectedNewService = services.filter(service => service.heading === otherServices[index].name)[0];
        setSelectedService(selectedNewService);
        scrollToTop();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {hours, date, time, aircon_type, quantity} = formData;
        if(hours && date && time) {
            const data = {hours, date, time, service: heading, price: price, aircon_type, quantity};
            navigate("/booking/booking-details", {state:{data: data}});
        }
        setFormData({hours: "", date: "", time: "", aircon_type: "", quantity: ""});
    }
    
    const aircon = 'AIRCON CLEANING SERVICE' === heading;

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
                            <span>{`₱ ${price} per hour`}</span>
                        </div>
                        <div className={styles.row}>
                            <span>Description</span>
                            <span>{description}</span>
                        </div>
                        <form className={`flex ${aircon ? 'flex-row' : 'flex-col'} flex-wrap justify-between items-start`}  onSubmit={handleSubmit}>
                            <div className="w-[calc(100%/2-20px)] flex flex-col">
                                <label className="mt-[20px]">Hour/s:</label>
                                <input className="p-[8px] outline-0 rounded-[3px] border border-solid border-zinc-400" type="number" name="hours" onChange={handleChange}/>
                                <label className="mt-[20px]">Select Date:</label>
                                <input className="p-[8px] outline-0 rounded-[3px] border border-solid border-zinc-400" type="date" name="date" onChange={handleChange}/>
                            </div>
                            {aircon && (
                                <div className="w-[calc(100%/2-20px)] flex flex-col">
                                    <label className="mt-[20px]">Aircon Type:</label>
                                    <select className="py-[12px] px-[8px] outline-0 rounded-[3px] border border-solid border-zinc-400" name="aircon_type" onChange={handleChange}>
                                        <option value="" hidden>Select Aircon Type</option>
                                        <option value="Window Type">Window Type</option>
                                        <option value="Split">Split</option>
                                        <option value="Standing - (Floor Mounted)">Standing - (Floor Mounted)</option>
                                    </select>
                                    <label className="mt-[20px]">Quantity:</label>
                                    <input className="p-[8px] outline-0 rounded-[3px] border border-solid border-zinc-400" type="number" name="quantity" onChange={handleChange}/>
                                </div>
                            )}
                            <div className="w-[calc(100%/2-20px)] flex flex-col">
                                <label className="mt-[20px]">Select Work Time:</label>
                                <input className="p-[8px] outline-0 rounded-[3px] border border-solid border-zinc-400" type="time" name="time" onChange={handleChange}/>
                            </div>
                            <button className="font-heading text-[30px] mt-[20px] self-center bg-blue text-white pt-[10px] pb-[5px] px-[150px] rounded-[30px] tracking-[0.1rem]">BOOK NOW</button>
                        </form>
                    </div>
                </div>
                <div className={styles.cleaners}>
                    <h3>Cleaners</h3>
                    <div className={styles.square}>
                        <div className={styles.holder}>
                            <img src={cleaner1Image}/>
                            <div>
                                <span>Name: {cleaner1Name}</span>
                                <span>{`Age: ${cleaner1Age} years old`}</span>
                            </div>
                        </div>
                        <div className={styles.holder}>
                            <img src={cleaner2Image}/>
                            <div>
                                <span>Name: {cleaner2Name}</span>
                                <span>{`Age: ${cleaner2Age} years old`}</span>
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
                        return <ServiceCard heading={heading} background={background} index={index} margin="mt-[50px] mb-0 mx-[30px]" color="#D9D9D9" align="start" handleClick={handleClick} key={index}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default ServicesBooking;