import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { DraftTodo } from '../types'
import { useTodo } from '../hooks/useTodo'

export default function InputsContainer() {

    const {dispatch} = useTodo()
    
    const [todo, setTodo] = useState<DraftTodo>({
        text: '',
        completed: false
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            text: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        dispatch({type: 'add-todo', payload: {todo}})
        
        setTodo({
            text: '',
            completed: false
        })
    }

    return (
        <div className="w-full bg-white p-2 rounded-md mt-10 mb-3 md:max-w-[800px]">
            <form 
                className="flex justify-between items-center gap-2"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Create a new todo..." 
                    className="w-full p-2 rounded-md"
                    value={todo.text}
                    onChange={handleChange}
                />
                <button 
                    className="p-2 rounded-md cursor-pointer disabled:opacity-10"
                    disabled={todo.text.trim() === ''}
                >
                    <PlusCircleIcon className="h-8 w-8 text-black"/>
                </button>
            </form>
        </div>
    )
}
