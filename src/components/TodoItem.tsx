import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useTodo } from "../hooks/useTodo"
import { Todo } from "../types"

type TodoItemProps = {
    todo: Todo
}
export default function TodoItem({todo}:TodoItemProps) {
    const {state, dispatch} = useTodo()

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: todo.id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }
    return (
        <div
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            style={style}
            className={`${state.DarkMode ? 'bg-stone-700 text-white border-slate-400': ''} flex justify-between items-center gap-3 p-5 pb-10 border-b last-of-type:border-0`}
            //key={todo.id}
        >
            <input 
                type="checkbox"
                className="check"
                id="completed"
                checked={todo.completed}
                onChange={()=>{dispatch({type: 'toggle-todo', payload: {id: todo.id}})}}
                onPointerDown={(e) => e.stopPropagation()}
            />
            <p className={`flex-1 ${todo.completed && 'line-through'}`}>{todo.text}</p>
            <img 
                className="cursor-pointer" 
                src="/img/icon-cross.svg" alt="delete" 
                onClick={()=>{dispatch({type: 'delete-todo', payload: {deleted: todo.id}})}}
                onPointerDown={(e) => e.stopPropagation()}
            />
        </div>
    )
}
