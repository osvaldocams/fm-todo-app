import { useTodo } from "../hooks/useTodo"


export default function ListContainer() {
    const {state, dispatch, unCompletedLength} = useTodo()

    const filteredTodos = state.todos.filter(todo => {
        if(state.filter === 'all') return true
        if(state.filter === 'active') return !todo.completed
        if(state.filter === 'completed') return todo.completed
        return true
    })

    return (
        <div className={`w-full bg-white rounded-md text-VeryDarkGrayishBlue md:max-w-[800px] `}>
            {filteredTodos.map(todo =>(
                <div 
                    className={`${state.DarkMode ? 'bg-stone-700 text-white border-slate-400': ''} flex justify-between items-center gap-3 p-5 pb-10 border-b last-of-type:border-0 last-of-type:pb-0 `}
                    key={todo.id}
                >
                    <input 
                        type="checkbox"
                        className="check"
                        id="completed"
                        checked={todo.completed}
                        onChange={()=>{dispatch({type: 'toggle-todo', payload: {id: todo.id}})}}
                        
                    />
                    <p className={`flex-1 ${todo.completed && 'line-through'}`}>{todo.text}</p>
                    <img 
                        className="cursor-pointer" 
                        src="/img/icon-cross.svg" alt="delete" 
                        onClick={()=>{dispatch({type: 'delete-todo', payload: {deleted: todo.id}})}}
                    />
                </div>
            ))}

            <div className={`flex justify-between items-center p-5 md:justify-center md:gap-96 ${state.DarkMode ? 'bg-stone-700 text-white': ''}`}>
                <span>{unCompletedLength} items left</span>
                <button
                    onClick={()=>{dispatch({type: 'clear-completed'})}}
                >
                    clear completeds
                </button>
            </div>
        </div>
    )
}
