import { createContext, useReducer, Dispatch, ReactNode, useMemo } from "react";
import { initialState, TodoActions, todoReducer, TodoState } from "../reducers/todo-reducer";

type TodoContextProps = { 
    state: TodoState
    dispatch: Dispatch<TodoActions>
    unCompletedLength: number
}
type TodoProviderProps = {
    children: ReactNode
}
export const TodoContext = createContext<TodoContextProps>(null!) 

export const TodoProvider = ({children}:TodoProviderProps) => {
    
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const unCompletedLength = useMemo(() => state.todos.filter(todo => !todo.completed).length, [state.todos])

    return (
        <TodoContext.Provider value={{
            state, 
            dispatch,
            unCompletedLength
        }}>
            {children}
        </TodoContext.Provider>
    );
}