import React from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../utils/SwitcherLanguage';
import Button from '../Button';
import useStore from '../utils/zustand';
import PhoneAnimation from '../utils/PhoneAnimation';
import { DrawerDefault } from '../utils/Drawer';
import { Link } from 'react-router-dom';

const Header = () => {
    const { theme, toggleTheme } = useStore()
    const { t } = useTranslation("layout");
    return (
        <header className='bg-oq dark:bg-dakr py-[20px] font-exo sticky top-0 border-b border-gren z-50'>
            <div className='px-[20px] sm:container flex flex-row items-center justify-between'>
                <div>
                    <Link to={"/"}><svg class="flex dark:hidden" width="130" height="45" viewBox="0 0 164 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5V57H15.5V27.5L30.5 42.5L56.5 16.5L59 19V1H41.5L44.5 4L29.5 19L15.5 5H0Z" fill="#17252A"></path><path d="M97.684 35.748V57H83.236V35.916L64.168 1.56H80.128L90.46 20.88L100.792 1.56H116.668L97.684 35.748Z" fill="#17252A"></path><path d="M139.928 0.551996C143.68 0.551996 147.18 1.448 150.428 3.24C153.732 4.976 156.364 7.412 158.324 10.548C160.284 13.684 161.264 17.24 161.264 21.216C161.264 24.24 160.648 26.984 159.416 29.448C158.24 31.912 156.336 34.908 153.704 38.436L139.844 57H122.792L135.14 40.284C132.284 39.892 129.596 38.856 127.076 37.176C124.556 35.496 122.512 33.256 120.944 30.456C119.376 27.656 118.592 24.52 118.592 21.048C118.592 17.128 119.572 13.628 121.532 10.548C123.548 7.412 126.18 4.976 129.428 3.24C132.732 1.448 136.232 0.551996 139.928 0.551996ZM139.928 28.272C141.944 28.272 143.624 27.6 144.968 26.256C146.312 24.856 146.984 23.148 146.984 21.132C146.984 19.06 146.284 17.324 144.884 15.924C143.54 14.524 141.888 13.824 139.928 13.824C137.968 13.824 136.288 14.524 134.888 15.924C133.544 17.324 132.872 19.06 132.872 21.132C132.872 23.204 133.544 24.912 134.888 26.256C136.288 27.6 137.968 28.272 139.928 28.272Z" fill="#009494"></path><path d="M59.5 56.5H45.5V41.5L59.5 27.5V56.5Z" fill="#009494"></path></svg></Link>
                    <Link to={"/"}><svg class="dark:flex hidden" width="130" height="45" viewBox="0 0 164 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5V57H15.5V27.5L30.5 42.5L56.5 16.5L59 19V1H41.5L44.5 4L29.5 19L15.5 5H0Z" fill="#f4f4f4"></path><path d="M97.684 35.748V57H83.236V35.916L64.168 1.56H80.128L90.46 20.88L100.792 1.56H116.668L97.684 35.748Z" fill="#f4f4f4"></path><path d="M139.928 0.551996C143.68 0.551996 147.18 1.448 150.428 3.24C153.732 4.976 156.364 7.412 158.324 10.548C160.284 13.684 161.264 17.24 161.264 21.216C161.264 24.24 160.648 26.984 159.416 29.448C158.24 31.912 156.336 34.908 153.704 38.436L139.844 57H122.792L135.14 40.284C132.284 39.892 129.596 38.856 127.076 37.176C124.556 35.496 122.512 33.256 120.944 30.456C119.376 27.656 118.592 24.52 118.592 21.048C118.592 17.128 119.572 13.628 121.532 10.548C123.548 7.412 126.18 4.976 129.428 3.24C132.732 1.448 136.232 0.551996 139.928 0.551996ZM139.928 28.272C141.944 28.272 143.624 27.6 144.968 26.256C146.312 24.856 146.984 23.148 146.984 21.132C146.984 19.06 146.284 17.324 144.884 15.924C143.54 14.524 141.888 13.824 139.928 13.824C137.968 13.824 136.288 14.524 134.888 15.924C133.544 17.324 132.872 19.06 132.872 21.132C132.872 23.204 133.544 24.912 134.888 26.256C136.288 27.6 137.968 28.272 139.928 28.272Z" fill="#009494"></path><path d="M59.5 56.5H45.5V41.5L59.5 27.5V56.5Z" fill="#009494"></path></svg></Link>
                </div>

                <ul className='lg:flex hidden flex-row items-center gap-[30px] text-lg dark:text-oq text-qora'>
                    <a href="#teacher"><li className='cursor-pointer hover:text-gren duration-300'>{t("Teacher")}</li></a>
                    <li className='cursor-pointer hover:text-gren duration-300'>{t("Courses")}</li>
                    <a href="#result"><li className='cursor-pointer hover:text-gren duration-300'>{t("Result")}</li></a>
                    <a href="#contact"><li className='cursor-pointer hover:text-gren duration-300'>{t("Contact")}</li></a>
                    <a href="#news"><li className='cursor-pointer hover:text-gren duration-300'>{t("News")}</li></a>
                </ul>

                <div className='flex flex-row items-center sm:gap-[20px] gap-[5px]'>
                    <button onClick={toggleTheme} className='sm:flex hidden'>
                        <svg className='flex dark:hidden' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon cursor-pointer"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.9 4.9 1.4 1.4"></path><path d="m17.7 17.7 1.4 1.4"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.3 17.7-1.4 1.4"></path><path d="m19.1 4.9-1.4 1.4"></path></svg>
                        {/* <svg className='hidden dark:flex' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-dim cursor-pointer"><circle cx="12" cy="12" r="4"></circle><path d="M12 4h.01"></path><path d="M20 12h.01"></path><path d="M12 20h.01"></path><path d="M4 12h.01"></path><path d="M17.657 6.343h.01"></path><path d="M17.657 17.657h.01"></path><path d="M6.343 17.657h.01"></path><path d="M6.343 6.343h.01"></path></svg> */}
                    </button>
                    <PhoneAnimation />
                    <LanguageSwitcher />
                    <Button />

                    <DrawerDefault />
                </div>
            </div>
        </header>
    )
}

export default Header