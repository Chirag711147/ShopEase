import React from "react";

import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        At SHOP EASE, we are more than just an e-commerce platform; 
                        We are a team of passionate individuals dedicated to delivering exceptional products and experiences. 
                        Our journey began with a simple idea: 
                        to provide top-quality headphones and audio accessories to our valued customers. 
                        Today, we have evolved into a trusted destination for audio enthusiasts worldwide. 
                        Our commitment to innovation, customer satisfaction, and a seamless shopping experience drives us forward. 
                        Join us on this sonic adventure as we continue to redefine the way you experience sound.
                        Welcome to the world of SHOP EASE.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>  
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">Faridabad, Haryana, 121001</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91-9599653097</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: chiragofficial147@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">Smart Watches</div>
                    <div className="text">Bluetooth Speakers</div>
                    <div className="text">Wireless Earbuds</div>
                    <div className="text">Home Theatre</div>
                    <div className="text">Projectors</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        ShopEase 2023 CREATED BY CHIRAG (20BCS4238).
                    </div>
                    <img src={Payment} alt="Error"/>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
