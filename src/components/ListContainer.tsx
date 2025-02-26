import { useTodo } from "../hooks/useTodo"
import { DndContext, DragEndEvent, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import TodoItem from "./TodoItem"

export default function ListContainer() {
    const {state, dispatch, unCompletedLength} = useTodo()

    const filteredTodos = state.todos.filter(todo => {
        if(state.filter === 'all') return true
        if(state.filter === 'active') return !todo.completed
        if(state.filter === 'completed') return todo.completed
        return true
    })
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor)
    )
    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event
        if(over && active.id !== over.id){
            dispatch({type: 'reorder', payload: {activeId: active.id.toString(), overId: over.id.toString()}})
        }
    }

    return (
        <>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                sensors={sensors}
            >
                <SortableContext 
                    items={filteredTodos.map(todo => todo.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className={`w-full bg-white rounded-md text-VeryDarkGrayishBlue md:max-w-[800px] overflow-container`}>
                        {filteredTodos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>    
            <div 
                className={`mt-5 flex justify-between items-center p-5 rounded-md md:justify-center md:gap-96 ${state.DarkMode ? 'bg-stone-700 text-white': 'bg-white'}`}
            >
                <span>{unCompletedLength} items left</span>
                <button
                    onClick={() => {dispatch({type: 'clear-completed'})}}
                >
                    clear completeds
                </button>
            </div>
        </>
    )
}
