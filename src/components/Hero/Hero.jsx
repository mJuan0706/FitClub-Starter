import React from "react";
import './Hero.css'
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import {motion} from 'framer-motion';

const Hero = () => {

    const transition = {type: 'spring', duration : 3};
    const mobile = window.innerWidth<=768 ? true: false;
    return (
        <div className="hero" id='home'>

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
{/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                    initial={{left: mobile? "165px": '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>el mejor gimnasio de la ciudad</span>
                </div>
               {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text" >Moldea </span>
                        <span>Tu</span>
                    </div>
                    <div>
                        <span>cuerpo ideal</span>
                    </div>
                    <div>
                        <span>
                        Aquí te ayudaremos a moldear y construir tu cuerpo ideal y vivir tu vida al máximo.
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>Entrenadores expertos</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>MIEMBROS UNIDOS</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Empezar</button>
                    <button className="btn">Aprende más</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn" >Únete ahora</button>

                <motion.div
                initial={{right: '-1rem'}}
                whileInView={{right: '4rem'}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Ritmo cardiaco</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero images */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                initial={{right: '11rem'}}
                whileInView={{right: '20rem'}}
                transition={transition}
                src={hero_image_back} alt="" className="hero-image-back" />

                {/* calories */}
                <motion.div
                initial={{right: '37rem'}}
                whileInView={{right: '28rem'}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calorías quemadas</span>
                    <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero