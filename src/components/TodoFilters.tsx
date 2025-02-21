
export default function TodoFilters() {
    return (
        <div className="flex justify-center items-center gap-8 cursor-pointer mt-5 p-5 rounded-md bg-white text-VeryDarkGrayishBlue md:max-w-[800px]">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}
