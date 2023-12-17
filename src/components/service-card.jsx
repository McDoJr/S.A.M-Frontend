import {useNavigate} from "react-router-dom";

const ServiceCard = ({background, heading, index}) => {

    const navigate = useNavigate();

    return (
        <div className="w-[calc(100%/4-10px)] h-full relative cursor-pointer" onClick={() => navigate("/services/offer-details", {state:{index: index, source: "/home"}})}>
            <img className="w-full h-[calc(100%-100px)] overflow-hidden" src={background} alt="background.png"/>
            <div className="absolute left-0 bottom-0 w-full p-[20px] h-[100px] flex flex-col items-start justify-center bg-[#D9D9D9]">
                {heading}
            </div>
        </div>
    )
}

export default ServiceCard;