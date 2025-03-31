import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex justify-around py-4 items-center bg-pink-800">
            <p className="font-bold text-3xl text-green-500">JALO</p>
            <ul className="flex justify-between gap-8 font-medium text-white">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <div className="flex items-center gap-8">
                <div className="flex">
                    <input
                        type="text"
                        name=""
                        placeholder="Procure..."
                        className="rounded-l-xl p-2 bg-white"
                    />
                    <div className="rounded-r-xl bg-green-500 p-2">
                        <Search className="text-white" />
                    </div>
                </div>
                <ShoppingBag className="text-white" />
            </div>
        </div>
    );
}
