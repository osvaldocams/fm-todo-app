import { useTodo } from "../hooks/useTodo"

export default function TodoFilters() {
    
    const {state, dispatch} = useTodo()

    
    
    return (
        <div className={`flex justify-center items-center gap-8 cursor-pointer mt-5 p-5 rounded-md ${state.DarkMode ? 'bg-stone-700 text-white': 'bg-white text-VeryDarkGrayishBlue'}  md:max-w-[800px]`}>
            <button
                onClick={()=>{dispatch({type: 'set-filter', payload: {filter: 'all'}})}}
            >All
            </button>
            <button
                onClick={()=>{dispatch({type: 'set-filter', payload: {filter: 'active'}})}}
            >Active
            </button>
            <button
                onClick={()=>{dispatch({type: 'set-filter', payload: {filter: 'completed'}})}}
            >Completed
            </button>
        </div>
    )
}
