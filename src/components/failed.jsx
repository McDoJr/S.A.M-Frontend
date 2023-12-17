import {FaCircleXmark} from "react-icons/fa6";

const Failed = ({message = "Failed!"}) => {
    return (
        <section className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black/95 z-[1000]">
            <FaCircleXmark className="text-red-600 bg-white rounded-[50%] w-[100px] h-[100px] mb-[20px]"/>
            <span className="text-[18px] text-white font-[600]">{message}</span>
        </section>
    )
}
export default Failed;
