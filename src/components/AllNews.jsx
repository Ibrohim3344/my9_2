import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AllNews = () => {
    const location = useLocation();
    const [newsList, setNewsList] = useState([]);
    const [customNews, setCustomNews] = useState([]);

   
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
            .then((response) => response.json())
            .then((data) => {
                setNewsList(data);
            })
            .catch((error) => console.error("Error fetching news:", error));
    }, []);

   
    useEffect(() => {
        const storedNews = JSON.parse(localStorage.getItem("customNews")) || [];
        setCustomNews(storedNews);
    }, []);

   
    useEffect(() => {
        if (location.state) {
            const newCustomNews = [location.state, ...customNews];
            setCustomNews(newCustomNews);
            localStorage.setItem("customNews", JSON.stringify(newCustomNews)); 
        }
    }, [location.state]);

    return (
        <section className="bg-oq py-10 dark:bg-dakr">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-qora dark:text-oq">
                    Barcha Yangiliklar
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* POST qilingan yangiliklar */}
                    {customNews.map((news) => (
                        <div key={news.id} className="border rounded-lg shadow-md overflow-hidden">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl text-qora dark:text-oq font-semibold">
                                    {news.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                    
                    {newsList.map((news) => (
                        <div key={news.id} className="border rounded-lg shadow-md overflow-hidden">
                            <img
                                src={news.url}
                                alt={news.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl text-qora dark:text-oq font-semibold">
                                    {news.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllNews;
