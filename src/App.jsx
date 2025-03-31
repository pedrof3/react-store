import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import Home from "./components/Home";

export default function App() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = "https://dummyjson.com/products";
                const request = await fetch(URL);

                if (request.status === 200) {
                    const obj = await request.json();
                    console.log(obj);
                    setProduct(obj);
                    setLoading(false);
                }
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Finish request.");
            }
        };
        fetchApi();
    }, []);

    if (!loading) {
        return (
            <div>
                <Navbar product={product} />
                <Home />
                <Footer />
            </div>
        );
    }

    // return (
    //     <div>
    //         <Navbar />
    //         <div>
    //             <p>Conteúdo da tela</p>
    //         </div>
    //         <Footer />
    //     </div>
    // );
}
