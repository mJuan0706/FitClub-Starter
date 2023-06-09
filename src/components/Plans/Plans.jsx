import React from "react";
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{gap : '2rem'}} >
                <span className="stroke-text">LISTO PARA COMENZAR</span>
                <span>SU VIAJE AHORA</span>
                <span className="stroke-text">CON NOSOTROS</span>
            </div>

            {/* plans card */}
            <div className="plans">
                {plansData.map((plan, i)=> (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i)=> (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>Ver más beneficios -></span>
                        </div>
                        <button className="btn">Únete ahora</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans