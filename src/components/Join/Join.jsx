import React, { useRef } from "react";
import './Join.css';
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kqcl3vw', 'template_px094sk', form.current, 'ay9kuWqSma1W2hZK6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">¿LISTO PARA</span>
                    <span>SUBIR EL NIVEL</span>
                </div>
                <div>
                    <span>DE TU CUERPO</span>
                    <span className="stroke-text">CON NOSOTROS?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Ingrese su dirección de correo electrónico" />
                    <button className="btn btn-j">Únete ahora</button>
                </form>
            </div>
        </div>
    )
}

export default Join