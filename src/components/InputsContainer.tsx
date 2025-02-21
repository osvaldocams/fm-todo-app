import { PlusCircleIcon } from '@heroicons/react/24/solid'

export default function InputsContainer() {
    return (
        <div className="w-full bg-white p-2 rounded-md mt-10 mb-3 md:max-w-[800px]">
            <form className="flex justify-between items-center gap-2">
                <input 
                    type="text" 
                    placeholder="Create a new todo..." 
                    className="w-full p-2 rounded-md" 
                />
                <button 
                    className="p-2 rounded-md cursor-pointer"
                >
                    <PlusCircleIcon className="h-8 w-8 text-black hover:text-VeryLightGrayishBlue" />
                </button>
            </form>
        </div>
    )
}
