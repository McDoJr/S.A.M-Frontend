import {FaCircleCheck} from "react-icons/fa6";

const Success = ({message = "Success!"}) => {
    return (
        <section className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black/95 z-[1000]">
            <FaCircleCheck className="text-green-400 bg-white rounded-[50%] border border-solid border-green-400 w-[100px] h-[100px] mb-[20px]"/>
            <span className="text-[18px] text-white font-[600]">{message}</span>
        </section>
    )
}
export default Success;
