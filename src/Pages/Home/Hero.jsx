import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Btn from '../../Btn';
import Modal from '../../utils/Modal';

const Hero = () => {
    const { t } = useTranslation("hero");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasApplication, setHasApplication] = useState(false);

    useEffect(() => {
        // LocalStorage'da zayavka borligini tekshirish
        const application = localStorage.getItem("application");
        if (application) {
            setHasApplication(true);
        }
    }, []);

    const handleButtonClick = () => {
        if (!hasApplication) {
            setIsModalOpen(true);
        } else {
            alert("Siz avval zayavka topshirgansiz!");
        }
    };

    const cancelApplication = () => {
        localStorage.removeItem("application");
        setHasApplication(false);
        alert("Sizning zayavkangiz bekor qilindi!");
    };

    const handleModalSubmit = () => {
        setIsModalOpen(false);
        setHasApplication(true);
    };

    return (
        <section className='bg-oq py-[50px] dark:bg-dakr'>
            <div className='container flex lg:flex-row flex-col items-center justify-between gap-[30px]'>
                <div className='flex flex-col lg:items-start items-center lg:text-start text-center gap-[30px]'>
                    <h1 className='text-qora dark:text-oq sm:text-6xl text-3xl font-bold'>{t("English")}</h1>
                    <span className='sm:text-xl text-lg text-gray-700'>{t("Teach")}</span>
                    {!hasApplication ? (
                        <Btn text={t("Button")} onClick={handleButtonClick} />
                    ) : (
                        <button
                            onClick={cancelApplication}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Zayavkani bekor qilish
                        </button>
                    )}
                </div>
                <img src="https://my9-learning-center.vercel.app/hero_img.svg" alt="" className='lg:w-[50%] w-[100%]' />
            </div>

            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />}
        </section>
    );
};

export default Hero;
