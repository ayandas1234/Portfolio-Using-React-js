import React from 'react'
import styles from './ContactStyles.module.css'
import { toast, ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mbldpkdk");

    if (state.succeeded) {
        return (
            <div className={styles.SuccessMessage}>
                <p>🎉 Thanks for joining! 🚀</p>
            </div>
        );
    }

    const notification = () => {
        toast('🚀 Form Submitted Successfully!! 🎯', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <section id='contact' className={styles.Container}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <h1 className="sectionTitle">Contact</h1>
            <form action="" onSubmit={(e) => { e.preventDefault(); notification(); handleSubmit(e); }} method='post'>
                <div className="formGroup">
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <input className="hover btn" type="submit" value="Submit" disabled={state.submitting} />
            </form>
        </section>
    )
}

export default Contact
