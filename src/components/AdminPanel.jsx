import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newNews = {
            id: Date.now(), 
            title: title,
            image: image ? URL.createObjectURL(image) : "https://via.placeholder.com/150",
        };

        // API'ga POST qilish (o'rnak uchun)
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newNews),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Yangilik yaratildi:", data);
                navigate("/news", { state: newNews }); 
            })
            .catch((error) => console.error("Yangilik yaratishda xatolik:", error));
    };

    return (
        <section className="bg-oq py-10 dark:bg-dakr">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-qora dark:text-oq">
                    Admin Panel
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-qora dark:text-oq font-medium">
                            Yangilik sarlavhasi
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-qora dark:text-oq font-medium">
                            Rasm tanlash
                        </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                    {image && (
                        <div className="mb-4">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    )}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-qora text-white rounded-lg hover:bg-qora-dark"
                        >
                            Yangilik Yaratish
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AdminPanel;
