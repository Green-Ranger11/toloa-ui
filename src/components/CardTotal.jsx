import react from "react";

function CardTotal(props) {
    return (
        <div class="bg-slate-200 p-3 rounded-md border border-gray-50 mx-3 shadow-xl shadow-indigo-900 w-56">
            <div class="flex justify-between items-start">
                <div class="flex flex-col">
                    <p class="text-md text-gray-600 tracking-wide">{props.title}</p>
                    <h3 class="mt-1 text-2xl text-blue-500 font-bold">{props.total}</h3>
                    <span class="mt-4 text-xs text-gray-500">{props.lastUpdate}</span>
                </div>
                <div class="bg-[#000011] p-2 md:p-1 xl:p-2 rounded-md">
                    <img src={new URL(`../images/${props.icon}`, import.meta.url).href} className="w-auto md:h-6 xl:h-8 object-cover" />
                </div>
            </div>
        </div>
    );
};

export default CardTotal;