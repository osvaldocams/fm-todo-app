import { arrayMove } from "@dnd-kit/sortable";
import { DraftTodo, Filter, Todo } from "../types";
import { nanoid } from "nanoid"


export type TodoActions = 
    {type: 'add-todo', payload:{todo: DraftTodo}} |
    {type: 'complete-todo', payload:{completed: Todo['id']}}|
    {type: 'delete-todo', payload:{deleted: Todo['id']}}|
    {type: 'clear-completed'}|
    {type: 'toggle-todo', payload:{id: Todo['id']}}|
    {type: 'set-filter', payload:{filter: Filter}}|
    {type: 'toggle-dark-mode'}|
    {type: 'reorder', payload:{activeId: Todo['id'], overId: Todo['id']}}



export type TodoState = { 
    todos: Todo[]
    filter: Filter
    DarkMode: boolean
}

const localStorageTodos = ():Todo[] => {
    const todos = localStorage.getItem('task')
    if(todos){
        return JSON.parse(todos)
    }
    return []
}
const localStorageDarkMode = ():boolean => {
    const darkMode = localStorage.getItem('dark-mode')
    if(darkMode){
        return JSON.parse(darkMode)
    }
    return false
}

export const initialState: TodoState = {
    todos: localStorageTodos(),
    filter: 'all',
    DarkMode: localStorageDarkMode()
}

const createTodo = (draftTodo:DraftTodo):Todo =>{
    return{
        ...draftTodo,
        id: nanoid()
    }
}

export const todoReducer = (
    state: TodoState = initialState,
    actions: TodoActions
)=>{
    if(actions.type === 'add-todo'){
        const newTodo = createTodo(actions.payload.todo)
        return {
            ...state,
            todos: [...state.todos, newTodo]
        }
    }
    if(actions.type === 'complete-todo'){
        return {
            ...state,
            todos: state.todos.map(todo => {
                if(todo.id === actions.payload.completed){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
        })
        }
    }
    if(actions.type === 'delete-todo'){
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== actions.payload.deleted)
        }
    }
    if(actions.type === 'clear-completed'){
        return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed)
        }
    }
    if(actions.type==='toggle-todo'){
        return{
            ...state,
            todos: state.todos.map(todo => todo.id === actions.payload.id 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        }
    }
    if(actions.type === 'set-filter'){
        return {
            ...state,
            filter: actions.payload.filter
        }
    }
    if(actions.type === 'toggle-dark-mode'){
        return {
            ...state,
            DarkMode: !state.DarkMode
        }
    }
    if(actions.type === 'reorder'){
        const {activeId, overId} = actions.payload
        const activeIndex = state.todos.findIndex(todo => todo.id === activeId)
        const overIndex = state.todos.findIndex(todo => todo.id === overId)
        const newTodos = arrayMove(state.todos, activeIndex, overIndex)
        // const newTodos = [...state.todos]
        // newTodos.splice(overIndex, 0, newTodos.splice(activeIndex, 1)[0])
        return {
            ...state,
            todos: newTodos
        }
    }
    return state
}