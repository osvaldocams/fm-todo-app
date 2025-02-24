
import { useEffect } from "react"
import InputsContainer from "./components/InputsContainer"
import ListContainer from "./components/ListContainer"
import TodoFilters from "./components/TodoFilters"
import { useTodo } from "./hooks/useTodo"

// "bg-slate-100 min-h-screen"

function App() {
	const {state, dispatch} = useTodo()

	useEffect(()=>{
		localStorage.setItem('task', JSON.stringify(state.todos))
		localStorage.setItem('dark-mode', JSON.stringify(state.DarkMode))
	}, [state])
	
    return (
		<div className={`fixed inset-0 w-screen h-screen z-50 overflow-auto ${state.DarkMode ? 'bg-stone-900': 'bg-[#f5f5f5]'}`}>
		<div className={`bg-[#f5f5f5] min-h-screen ${state.DarkMode && 'bg-stone-900'}`}>
			<div 
				className={`${state.DarkMode ? 'hero-dark' : 'hero'}`}
			>
				<header className="text-white uppercase flex justify-between mt-5 items-center md:w-[760px] ">
					<h1 className="font-bold text-2xl letter-spacing md:text-4xl">todo</h1>
					<button>
						<img 
							src={`/img/icon-${state.DarkMode ? 'sun' : 'moon'}.svg`} 
							alt="dark-day-mode"
							onClick={()=>{dispatch({type: 'toggle-dark-mode'})}}
						/>
					</button>
				</header>
				<InputsContainer />
				<ListContainer />
				<TodoFilters/>
				<p className={`mt-20 ${state.DarkMode ? 'text-white': 'text-VeryDarkGrayishBlue'} text-center`}>Drag and drop to reorder list</p>
			</div>
		</div>
		</div>
	)
}

export default App
