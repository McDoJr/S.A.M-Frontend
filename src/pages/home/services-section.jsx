import ServiceCard from "../../components/service-card.jsx";
import {useNavigate} from "react-router-dom";

const ServicesSection = () => {

    const navigate = useNavigate();

    const cards = [
        {
            heading: (
                <>
                    <h2 className="m-0">Deep Cleaning</h2>
                    <span className="mb-[5px] text-[14px]">per hour</span>
                    <h3 className="font-[400]">Php 1,500.00</h3>
                </>
            ),
            background: require("../../images/deep_cleaning.png")},
        {
            heading: (
                <>
                    <h2 className="m-0">Aircon Cleaning</h2>
                    <span className="mb-[5px] text-[14px]">per hour</span>
                    <h3 className="font-[400]">Php 975.00</h3>
                </>
            ),
            background: require("../../images/aircon_cleaning.png")},
        {
            heading: (
                <>
                    <h2 className="m-0">Basic Cleaning</h2>
                    <span className="mb-[5px] text-[14px]">per hour</span>
                    <h3 className="font-[400]">Php 750.00</h3>
                </>
            ),
            background: require("../../images/basic_cleaning.png")},
        {
            heading: (
                <>
                    <h2 className="m-0">Laundry Service</h2>
                    <span className="mb-[5px] text-[14px]">per hour</span>
                    <h3 className="font-[400]">Php 600.00</h3>
                </>
            ),
            background: require("../../images/laundry_services.png")}
    ];

    return (
        <section className="w-full h-screen p-[50px] flex flex-col justify-center items-center bg-blue">
            <h1 className="mt-[10px] mb-[20px] font-heading text-[80px] text-white font-[500] tracking-[0.2rem]">OUR SERVICES</h1>
            <div className="w-full min-h-[70%] flex justify-between">
                {cards.map(({heading, background}, index) => {
                    return <ServiceCard heading={heading} background={background} index={index} key={index}/>
                })}
            </div>
            <button className="mt-[40px] mb-[50px] text-[20px] py-[10px] px-[40px] text-blue bg-white cursor-pointer" onClick={() => navigate("/services")}>Show More</button>
        </section>
    )
}

export default ServicesSection;