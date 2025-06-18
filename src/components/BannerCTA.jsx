import {FaArrowRight} from "react-icons/fa6";

const BannerCTA = ({mainClassName, bannerCTAwords, bannerCTAwordsClassName,buttonClassName, spanClassName, buttonName, circleClassName, arrowClassName}) => {
    return(
        <div className={mainClassName}>
            <h3 className={bannerCTAwordsClassName}>{bannerCTAwords}</h3>

            <button className={buttonClassName}>
                <span className={spanClassName}>{buttonName}</span>

                <div className={circleClassName}>
                    <FaArrowRight className={arrowClassName}/>
                </div>
            </button>
        </div>
    )
}

export default BannerCTA;