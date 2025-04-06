import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = "https://dummyjson.com/products";
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
            <Navbar />
            <div className="flex justify-center">
                <div className="w-[85%] grid grid-cols-3 gap-6 p-12">
                    {list.products.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col gap-3"
                            onClick={() => {
                                navigate(`/product?id=${product.id}`);
                            }}
                        >
                            <div className="bg-gray-200">
                                <img src={product.images[0]} alt="" />
                            </div>
                            <div className="">
                                <p className="text-xl font-bold text-black">
                                    {product.title}
                                </p>
                                <p className="font-medium text-gray-700">
                                    {product.category}
                                </p>
                                <div className="flex gap-2">
                                    <p className="font-medium">
                                        $ {product.price}
                                    </p>
                                    <p className="font-medium text-green-700">
                                        {product.discountPercentage}% off
                                    </p>
                                </div>
                                <p>{product.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
