import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ihkfivr', 'template_e07x3hf', form.current, 'lsN6WThGlV0hYHzTI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor={"name"}>Name:</label>
            <input type="text" name={"name"} />
            <label>
                Name:
                <input type="text" name={"mail"} />
            </label>
            <label>
                Name:
                <input type="text" name={"object"}/>
            </label>
            <label>
                Name:
                <input type="text" name={"message"}
                />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
};