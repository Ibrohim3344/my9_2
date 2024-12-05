import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Modal = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

  
        localStorage.setItem("application", JSON.stringify(formData));

        alert("Zayavka muvaffaqiyatli saqlandi!");
        onSubmit(); 
        onClose();
    };

    const { t } = useTranslation("modal");


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">{t("zayav")}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium">{t("fullName")}</label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">{t("phoneNumber")}</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">{t("lessonLevel")}</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-500 duration-300 hover:bg-gren text-white rounded-md"
                        >
                            {t("cancel")}
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gren text-white rounded-md hover:bg-gray-500 duration-300"
                        >
                            {t("send")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
