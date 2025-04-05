export default function Loading() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-[6rem] h-[6rem] rounded-[50%] border-8 animate-spin border-gray-400 border-b-transparent bg-transparent"></div>
            <p>Loading</p>
        </div>
    );
}
