import { DraftTodo, Filter, Todo } from "../types";
import { nanoid } from "nanoid"


export type TodoActions = 
    {type: 'add-todo', payload:{todo: DraftTodo}} |
    {type: 'complete-todo', payload:{completed: Todo['id']}}|
    {type: 'delete-todo', payload:{deleted: Todo['id']}}|
    {type: 'clear-completed'}|
    {type: 'toggle-todo', payload:{id: Todo['id']}}|
    {type: 'set-filter', payload:{filter: Filter}}



export type TodoState = { 
    todos: Todo[]
    filter: Filter
}

export const initialState: TodoState = {
    todos: [],
    filter: 'all'
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
    return state
}