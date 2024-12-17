import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import commentsData from "../../database/comments.json";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comments = () => {
    const { t } = useTranslation("comment");

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ name: "", body: "", email: "" });

    useEffect(() => {
        setComments(commentsData);
    }, []);

    const handleInputChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!newComment.name || !newComment.body || !newComment.email) {
            toast.error(t("all fields required"));
            return;
        }

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment),
            });

            if (response.ok) {
                const savedComment = await response.json();
                setComments([savedComment, ...comments.slice(0, 9)]);
                setNewComment({ name: "", body: "", email: "" });
                toast.success(t("commentAdded"));
            } else {
                const error = await response.json();
                toast.error(`${t("failed to AddComment")}: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error(t("network Error"));
        }
    };

    return (
        <section className="bg-oq dark:bg-dakr py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">{t("comments")}</h2>
                <div className="mx-5 mt-5 flex justify-center items-center overflow-hidden">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            560: { slidesPerView: 2 },
                            1400: { slidesPerView: 3 },
                        }}
                    >
                        {comments.slice(0, 10).map((comment) => (
                            <SwiperSlide key={comment.id}>
                                <div className="bg-white dark:bg-gren p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 h-full flex flex-col justify-between min-h-[200px]">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 flex-grow">{comment.name}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{comment.body}</p>
                                    <span className="text-xs text-gray-500 dark:text-gray-300 mt-auto">- {comment.email}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <form onSubmit={handleFormSubmit} className="mt-5 bg-white dark:bg-dakr dark:border-2 p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t("name")}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newComment.name}
                            onChange={handleInputChange}
                            placeholder={t("enterName")}
                            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:outline-gren dark:bg-transparent dark:text-oq"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t("comment")}</label>
                        <textarea
                            id="body"
                            name="body"
                            value={newComment.body}
                            onChange={handleInputChange}
                            placeholder={t("write")}
                            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:outline-gren dark:bg-transparent dark:text-oq"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t("email")}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={newComment.email}
                            onChange={handleInputChange}
                            placeholder={t("enterEmail")}
                            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:outline-gren dark:bg-transparent dark:text-oq"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-gren text-white p-2 rounded hover:bg-gren">{t("send")}</button>
                </form>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Comments;
