import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
    const { id } = useParams(); 
    const { t } = useTranslation("news");
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPhoto(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching photo:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="text-center">{t("loading")}</p>;
    }

    if (!photo) {
        return <p className="text-center">{t("notFound")}</p>;
    }

    return (
        <section className="bg-oq py-10 dark:bg-dakr">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-qora dark:text-oq">{t("newsDetail")}</h2>
                <div className="max-w-3xl mx-auto border rounded-lg shadow-md overflow-hidden">
                    <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-96 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-2xl text-qora dark:text-oq font-semibold">{photo.title}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsDetail;
