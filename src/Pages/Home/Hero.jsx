import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Btn from '../../Btn';
import Modal from '../../utils/Modal';

const Hero = () => {
    const { t } = useTranslation("hero");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [hasApplication, setHasApplication] = useState(false);

    useEffect(() => {
    
        const application = localStorage.getItem("application");
        if (application) {
            setHasApplication(true);
        }
    }, []);

    const handleButtonClick = () => {
        if (!hasApplication) {
            setIsModalOpen(true);
        } else {
            setIsCancelModalOpen(true);
        }
    };

    const cancelApplication = () => {
        localStorage.removeItem("application");
        setHasApplication(false);
        alert("Sizning zayavkangiz bekor qilindi!");
        setIsCancelModalOpen(false); 
    };

    const handleModalSubmit = () => {
        setIsModalOpen(false);
        setHasApplication(true);
    };

    return (
        <section className="bg-oq py-[50px] dark:bg-dakr">
            <div className="container flex lg:flex-row flex-col items-center justify-between gap-[30px]">
                <div className="flex flex-col lg:items-start items-center lg:text-start text-center gap-[30px]">
                    <h1 className="text-qora dark:text-oq sm:text-6xl text-3xl font-bold">{t("English")}</h1>
                    <span className="sm:text-xl text-lg text-gray-700">{t("Teach")}</span>
                    <Btn text={t(hasApplication ? "cancelOrView" : "Button")} onClick={handleButtonClick} />
                </div>
                <img
                    src="https://my9-learning-center.vercel.app/hero_img.svg"
                    alt=""
                    className="lg:w-[50%] w-[100%]"
                />
            </div>


            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
            )}

            {isCancelModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-96">
                        <h2 className="text-xl font-bold mb-4">{t("currentApplication")}</h2>
                        <p>
                            <strong>{t("fullName")}:</strong> {JSON.parse(localStorage.getItem("application"))?.fullname}
                        </p>
                        <p>
                            <strong>{t("phoneNumber")}:</strong> {JSON.parse(localStorage.getItem("application"))?.phone}
                        </p>
                        <p>
                            <strong>{t("lessonLevel")}:</strong> {JSON.parse(localStorage.getItem("application"))?.category}
                        </p>
                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                onClick={cancelApplication}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                {t("cancelRequest")}
                            </button>
                            <button
                                onClick={() => {
                                    setIsCancelModalOpen(false);
                                    setIsModalOpen(true);
                                }}
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                {t("resubmitRequest")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
