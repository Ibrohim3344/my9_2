import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Result = () => {
    const { t } = useTranslation("result");


    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
            .then((response) => response.json())
            .then((data) => {
                setPhotos(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Xatolik yuz berdi:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center">{t("loading")}</p>;
    }



    return (
        <section className="bg-oq py-10 dark:bg-dakr" id='result'>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-qora dark:text-oq">{t("result")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {photos.map((photo) => (
                        <div key={photo.id} className="border rounded-lg shadow-md overflow-hidden">
                            <img
                                src={photo.thumbnailUrl}
                                alt={photo.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg text-qora dark:text-oq font-semibold truncate">{photo.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Result;
