import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const Contact = () => {
    const { t } = useTranslation("contact");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    
        emailjs.sendForm('service_qfxwzvm', 'template_ejmmgzl', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error(error.text);
                alert("An error occurred. Please try again.");
            });

  
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section id="contact" className="p-6 bg-oq dark:bg-dakr">
            <div className="container">
                <h2 className="md:text-4xl text-2xl font-bold mb-4 text-center text-qora dark:text-oq">{t("link")}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            {t("name")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t("ism")}
                            className="mt-1 block w-full px-3 text-qora dark:text-oq py-2 border bg-transparent border-gray-300 dark:border-oq rounded-md shadow-sm focus:outline-none focus:border-oq"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            {t("email")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t("enter")}
                            className="mt-1 block w-full text-qora dark:text-oq px-3 py-2 border bg-transparent dark:border-oq border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            {t("message")}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder={t("yourMessage")}
                            className="mt-1 block w-full px-3 py-2 border text-qora dark:text-oq bg-transparent dark:border-oq border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gren hover:bg-gren focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                        {t("send")}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
