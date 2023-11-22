import "./Banner.scss";
import {useNavigate} from "react-router-dom";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    const navigate = useNavigate();

    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Get your hands on these extraordinary headphones at an exclusive sale price for a limited time. 
                    Don't miss out on the chance to elevate your audio experience to new heights. 
                    Shop now and experience sound like never before!
                </p>
                <div className="ctas">
                    <div className="banner-cta" onClick={() => navigate(`/category/1`)}>Read More</div>
                    <div className="banner-cta v2" onClick={() => navigate(`/category/1`)}>Shop Now</div>

                </div>
            </div>
            <img className="banner-img" src={BannerImg}  alt=" "/>
        </div>
    </div>
    );
};

export default Banner;
