export default function Home() {
    return (
        <div className="flex flex-col p-40">
            <p className="text-6xl font-extrabold">JALO</p>
            <p className="text-2xl">Loja para quem quer qualidade.</p>
            <div className="flex py-2 gap-2">
                <button className="text-md font-medium px-4 py-1 rounded-2xl border-2 cursor-pointer border-green-500 hover:bg-green-500">
                    CADASTRAR
                </button>
                <button className="text-md font-medium px-4 py-1 rounded-2xl border-2 cursor-pointer border-green-500 hover:bg-green-500">
                    PRODUTOS
                </button>
            </div>
        </div>
    );
}
