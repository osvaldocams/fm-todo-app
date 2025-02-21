

export default function ListContainer() {
    return (
        <div className="w-full bg-white rounded-md text-VeryDarkGrayishBlue md:max-w-[800px]">
            <div className="flex justify-between items-center gap-3 p-5 pb-10 border-b border-gray-200 last-of-type:border-0 last-of-type:pb-0">
                <input 
                    type="checkbox"
                    className="check"
                    id="completed" 
                />
                <p className="flex-1">Learn Javascript</p>
                <img src="/img/icon-cross.svg" alt="delete" />
            </div>
            <div className="flex justify-between items-center gap-3 p-5 pb-10 border-b border-gray-200 last-of-type:border-0 last-of-type:pb-0">
                <input 
                    type="checkbox"
                    className="check"
                    id="completed" 
                />
                <p className="flex-1">Learn Javascript</p>
                <img src="/img/icon-cross.svg" alt="delete" />
            </div>
            <div className="flex justify-between items-center gap-3 p-5 pb-10 border-b border-gray-200 last-of-type:border-0 last-of-type:pb-0">
                <input 
                    type="checkbox"
                    className="check"
                    id="completed" 
                />
                <p className="flex-1">Learn Javascript</p>
                <img src="/img/icon-cross.svg" alt="delete" />
            </div>
            <div className="flex justify-between items-center gap-3 p-5 pb-10 border-b border-gray-200 last-of-type:border-0 last-of-type:pb-0">
                <input 
                    type="checkbox"
                    className="check"
                    id="completed" 
                />
                <p className="flex-1">Learn Javascript</p>
                <img src="/img/icon-cross.svg" alt="delete" />
            </div>
            <div className="flex justify-between items-center gap-3 p-5 pb-10 border-b border-gray-200 last-of-type:border-0 last-of-type:pb-0">
                <input 
                    type="checkbox"
                    className="check"
                    id="completed" 
                />
                <p className="flex-1">Learn Javascript</p>
                <img src="/img/icon-cross.svg" alt="delete" />
            </div>

            <div className="flex justify-between items-center p-5 md:justify-center md:gap-96">
                <button>5 items left</button>
                <button>clear completes</button>
            </div>
        </div>
    )
}
