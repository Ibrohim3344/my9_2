import React from 'react'
import { useTranslation } from 'react-i18next';

const Teachers = () => {

    const { t } = useTranslation("teacher");

    return (
        <section className=' py-[40px] bg-oq dark:bg-dakr'>
            <div className='container'>
                <div className='flex flex-col text-center items-center gap-[20px]'>
                    <h1 className='md:text-4xl text-2xl text-qora dark:text-oq font-semibold'>{t("make")}</h1>
                    <span className='text-gray-600  md:text-xl text-lg text-center'>{t("w")}</span>
                </div>

                <div className='flex xl:flex-row flex-col items-center justify-between pt-[40px] gap-[70px]'>
                    <div className='flex flex-col xl:items-start items-center gap-[50px]'>
                        <div className='flex flex-col xl:items-end items-center gap-[15px]'>
                            <div className='flex flex-row items-center gap-[10px]'>
                                <span className='text-gren font-semibold text-lg'>{t("second")}</span>
                                <i class="fa-solid text-qora dark:text-oq text-lg fa-chalkboard-user"></i>
                            </div>
                            <span className='text-base md:text-end text-center text-qora dark:text-oq'>{t("help")}</span>
                        </div>

                        <div className='flex flex-col xl:items-end items-center gap-[15px]'>
                            <div className='flex flex-row items-center gap-[10px]'>
                                <span className='text-gren font-semibold text-lg'>{t("iq")}</span>
                                <i class="fa-solid text-qora dark:text-oq text-lg fa-book-open"></i>
                            </div>

                            <span className='text-base md:text-end text-center text-qora dark:text-oq'>{t("help")}</span>

                        </div>
                    </div>

                    <div className='border-2 border-gren rounded-2xl'>
                        <img src="https://my9-learning-center.vercel.app/Mamura_Yuldasheva.png" width={400} className='rounded-2xl' alt="" />
                    </div>


                    <div className='flex flex-col items-end gap-[50px]'>
                        <div className='flex flex-col xl:items-start items-center gap-[15px]'>
                            <div className='flex flex-row-reverse items-center gap-[10px]'>
                                <span className='text-gren font-semibold text-lg'>{t("center")}</span>
                                <i class="fa-solid text-qora dark:text-oq text-lg fa-calendar-day"></i>
                            </div>
                            <span className='text-base text-qora dark:text-oq md:text-start text-center'>{t("help")}</span>
                        </div>

                        <div className='flex flex-col xl:items-start items-center gap-[15px]'>
                            <div className='flex flex-row-reverse items-center gap-[10px]'>
                                <span className='text-gren font-semibold text-lg'>{t("co-working")}</span>
                                <i class="fa-solid text-qora dark:text-oq text-lg fa-mug-hot"></i>
                            </div>

                            <span className='text-base md:text-start text-center text-qora dark:text-oq'>{t("help")}</span>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teachers