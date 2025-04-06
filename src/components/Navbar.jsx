import { Search, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around py-4 items-center bg-pink-800">
            <p
                className="font-bold text-3xl cursor-pointer select-none text-green-500"
                onClick={() => {
                    navigate("/");
                }}
            >
                JALO
            </p>
            <ul className="flex justify-between gap-8 font-medium text-white">
                <li
                    className="cursor-pointer select-none"
                    onClick={() => {
                        navigate("/products");
                    }}
                >
                    Products
                </li>
                <li className="cursor-pointer select-none">Promotion</li>
                <li
                    className="cursor-pointer select-none"
                    onClick={() => {
                        navigate("/about");
                    }}
                >
                    About
                </li>
                <li
                    className="cursor-pointer select-none"
                    onClick={() => {
                        navigate("/contact");
                    }}
                >
                    Contact
                </li>
            </ul>
            <div className="flex items-center gap-8">
                <div className="flex">
                    <input
                        type="text"
                        name=""
                        placeholder="Procure..."
                        className="rounded-l-xl p-2 bg-white"
                    />
                    <div className="rounded-r-xl p-2 bg-green-500 hover:cursor-pointer">
                        <Search className="text-white" />
                    </div>
                </div>
                <ShoppingBag className="hover:cursor-pointer text-white" />
            </div>
        </div>
    );
}
