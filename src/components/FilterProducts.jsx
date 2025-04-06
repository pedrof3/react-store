import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";

export default function FilterProducts() {
    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = "https://dummyjson.com/products/category-list";
                const request = await fetch(URL);

                if (request.status === 200) {
                    const obj = await request.json();
                    setList(obj);
                    setLoading(false);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchApi();
    }, []);

    if (loading) {
        return (
            <div>
                <Navbar />
                <Loading />
            </div>
        );
    }

    return (
        <div>
            <div className="w-full p-2 bg-gray-200">
                {list.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        </div>
    );
}
