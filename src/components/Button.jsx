import {FaArrowRight} from "react-icons/fa6";

const Button = ({buttonClassName, spanClassName, circleClassName, arrowClassName, buttonName, fuctionButton}) => {
    return(
        <button className={buttonClassName} onClick={fuctionButton}>
            <span className={spanClassName}>{buttonName}</span>

            <div className={circleClassName}>
                <FaArrowRight className={arrowClassName}/>
            </div>
        </button>
    )
}

export default Button;