import {FaArrowRight} from "react-icons/fa6";

const Button = ({buttonName}) => {
    return(
        <button className="flex flex-row justify-center items-center gap-4 bg-button py-1 pl-4 pr-1 rounded-full">
            <span className="font-reguler text-black text-md">{buttonName}</span>

            <div className="bg-black rounded-full p-3">
                <FaArrowRight className="size-4 text-button"/>
            </div>
        </button>
    )
}

export default Button;