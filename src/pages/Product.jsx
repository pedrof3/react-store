import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default function Product() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = `https://dummyjson.com/products/${id}`;
                const request = await fetch(URL);

                if (request.status === 200) {
                    const obj = await request.json();
                    setProduct(obj);
                    setLoading(false);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchApi();
    }, [id]);

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
            <div className="flex justify-center my-12">
                <div className="w-[90%] flex flex-col">
                    <div className="flex gap-8">
                        <div className="w-[35%] flex bg-gray-200">
                            <img
                                src={product.images[0]}
                                alt=""
                                className="w-[100%]"
                            />
                        </div>

                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-xl font-medium text-green-600">
                                    {product.brand}
                                </p>
                                <p className="text-2xl font-bold text-black">
                                    {product.title}
                                </p>
                                <p className="text-md font-medium text-gray-500">
                                    {product.category}
                                </p>
                                <p className="text-xl font-medium text-black">
                                    $ {product.price}
                                </p>
                                <button className="w-[12rem] text-md font-bold mt-12 px-4 py-1.5 rounded-2xl cursor-pointer text-white bg-green-500 hover:text-gray-300">
                                    BUY
                                </button>
                            </div>
                            <div>
                                <p className="text-md font-medium text-gray-500">
                                    {product.warrantyInformation}
                                </p>
                                <p className="text-md font-medium text-gray-500">
                                    {product.shippingInformation}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl font-bold text-black">
                            Description
                        </p>
                        <p className="text-md font-normal text-black">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
