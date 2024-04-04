import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    function disableForm(form){
        form.current.submit.disabled = true;
        form.current.submit.style.cursor = 'not-allowed';
    }
    function enableForm(form){
        form.current.submit.disabled = false;
        form.current.submit.style.cursor = 'pointer';
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        disableForm(form);
        if (emailRegexp.test(form.current.email.value)){
            emailjs.sendForm('service_xga7du4', 'template_7de95tr', form.current, 'q6Kh82buacA_CtGTi')
                .then((result) => {
                    form.current.name.value= "";
                    form.current.email.value= "";
                    form.current.message.value= "";
                    alert("Le message a bien été envoyé !");
                    enableForm(form)
                }, (error) => {
                    alert("Il y a eu un problème dans l'envoi du message, veuillez réessayer");
                    enableForm(form)
                });
        } else {
            alert("L'email n'est pas renseigné ou n'est pas valide");
            enableForm(form)
        }
    };

    return (
        <div className="contact-container">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="input_container name">
                    <input
                        title="Inpit title"
                        name="name"
                        type="text"
                        className="input_field"
                        id="name_field"
                        required={true}/>
                    <label className="input_label" htmlFor="name_field">{localStorage['language']==="fr" ? "Nom" : "Name"}</label>
                </div>
                <div className="input_container email">
                    <input
                        title="Inpit title"
                        name="email"
                        type="email"
                        className="input_field"
                        id="email_field"
                        required={true}/>
                    <label className="input_label" htmlFor="message_field">Email</label>
                </div>
                <div className="input_container message">
                    <textarea
                        title="Inpit title"
                        name="message"
                        className="input_field"
                        id="message_field"
                        required={true}/>
                    <label className="input_label" htmlFor="message_field">Message</label>
                </div>
                <input className="submit" name="submit" type="submit" value={localStorage['language']==="fr" ? "Envoyer" : "Submit"}/>
            </form>
        </div>
    );
};