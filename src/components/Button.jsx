import {FaArrowRight} from "react-icons/fa6";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Button = ({buttonClassName, spanClassName, circleClassName, arrowClassName, buttonName, functionButton}) => {
    return(
        <button className={buttonClassName} onClick={functionButton}>
            <span className={spanClassName}>{buttonName}</span>

            <div className={circleClassName}>
                <FaArrowRight className={arrowClassName}/>
            </div>
        </button>
    )
}

export default Button;