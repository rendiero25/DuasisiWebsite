import {FaArrowRight} from "react-icons/fa6";

const Button = ({buttonClassName, spanClassName, circleClassName, arrowClassName, buttonName}) => {
    return(
        <button className={buttonClassName}>
            <span className={spanClassName}>{buttonName}</span>

            <div className={circleClassName}>
                <FaArrowRight className={arrowClassName}/>
            </div>
        </button>
    )
}

export default Button;