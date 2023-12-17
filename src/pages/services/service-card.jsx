import styles from "./service-card.module.css";

const ServiceCard = ({background, heading, index, handleClick, margin, color, align}) => {

    return (
        <div className={`w-[300px] ${margin} h-[370px] relative cursor-pointer`} onClick={() => handleClick(index)}>
            <img className="w-full h-[calc(100%-100px)] overflow-hidden" src={background} alt="background.png"/>
            <div className={`absolute bottom-0 left-0 p-[20px] w-full h-[100px] flex flex-col justify-between`} style={{alignItems: align, backgroundColor: color}}>
                {heading}
            </div>
        </div>
    )
}

export default ServiceCard;