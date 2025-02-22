import { useTodo } from "../hooks/useTodo"


export default function ListContainer() {
    const {state, dispatch, unCompletedLength} = useTodo()
    
    return (
        <div className="w-full bg-white rounded-md text-VeryDarkGrayishBlue md:max-w-[800px]">
            {state.todos.map(todo =>(
                <div 
                    className="flex justify-between items-center gap-3 p-5 pb-10 border-b border-gray-200 last-of-type:border-0 last-of-type:pb-0"
                    key={todo.id}
                >
                    <input 
                        type="checkbox"
                        className="check"
                        id="completed"
                        checked={todo.completed}
                        onChange={()=>{dispatch({type: 'complete-todo', payload: {completed: todo.id}})}}
                        
                    />
                    <p className="flex-1">{todo.text}</p>
                    <img 
                        className="cursor-pointer" 
                        src="/img/icon-cross.svg" alt="delete" 
                        onClick={()=>{dispatch({type: 'delete-todo', payload: {deleted: todo.id}})}}
                    />
                </div>
            ))}

            <div className="flex justify-between items-center p-5 md:justify-center md:gap-96">
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
