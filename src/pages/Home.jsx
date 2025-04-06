import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="w-[100%] bg-[url(./assets/home.webp)] bg-no-repeat bg-cover">
            <div className="flex flex-col px-25 py-52">
                <p className="text-6xl font-extrabold">JALO</p>
                <p className="text-2xl">Loja para quem quer qualidade.</p>
                <div className="flex py-2 gap-2">
                    <button className="text-md font-medium px-4 py-1 rounded-2xl border-2 cursor-pointer border-green-500 hover:bg-green-500">
                        CADASTRAR
                    </button>
                    <button
                        className="text-md font-medium px-4 py-1 rounded-2xl border-2 cursor-pointer border-green-500 hover:bg-green-500"
                        onClick={() => {
                            navigate("/products");
                        }}
                    >
                        PRODUTOS
                    </button>
                </div>
            </div>
        </div>
    );
}
