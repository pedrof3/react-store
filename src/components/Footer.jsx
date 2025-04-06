import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center bg-pink-800">
            <div className="w-[90%] flex flex-col text-center py-6">
                <p
                    className="font-bold text-3xl cursor-pointer select-none text-green-500"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    JALO
                </p>
                <ul className="flex justify-around font-medium text-white">
                    <li
                        className="cursor-pointer select-none"
                        onClick={() => {
                            navigate("/products");
                        }}
                    >
                        Products
                    </li>
                    <li className="cursor-pointer select-none">Promotions</li>
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
            </div>
        </div>
    );
}
