import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if (emailRegexp.test(form.current.email.value)){
            emailjs.sendForm('service_ihkfivr', 'template_e07x3hf', form.current, 'lsN6WThGlV0hYHzTI')
                .then((result) => {
                    alert("Le message a bien été envoyé !");
                }, (error) => {
                    alert("il y a eu un problème");
                });
        } else {
            alert("il y a eu un problème");
        }
    };

    return (
        <div className="contact-container">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="input_container name">
                    <label className="input_label" htmlFor="name_field">{localStorage['language']==="fr" ? "Nom" : "Name"}</label>
                    <input
                        placeholder="Nom"
                        title="Inpit title"
                        name="name"
                        type="text"
                        className="input_field"
                        id="name_field"
                        required={true}/>
                </div>
                <div className="input_container email">
                    <label className="input_label" htmlFor="email_field">Email</label>
                    <input
                        placeholder="nom@mail.com"
                        title="Inpit title"
                        name="email"
                        type="text"
                        className="input_field"
                        id="email_field"
                        required={true}/>
                </div>
                <div className="input_container message">
                    <label className="input_label" htmlFor="message_field">Message</label>
                    <textarea
                        placeholder="Message.."
                        title="Inpit title"
                        name="message"
                        className="input_field"
                        id="message_field"
                        required={true}/>
                </div>
                <input className="submit" type="submit" value="Submit"/>
            </form>
        </div>
    );
};