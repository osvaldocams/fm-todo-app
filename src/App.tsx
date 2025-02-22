
import InputsContainer from "./components/InputsContainer"
import ListContainer from "./components/ListContainer"
import TodoFilters from "./components/TodoFilters"

function App() {
	
    return (
		<div className="bg-slate-100 min-h-screen">
			<div 
				className="w-full h-[200px] bg-[url('/img/bg-mobile-light.jpg')]  md:h-[300px] md:lg:bg-[url('/img/bg-desktop-light.jpg')] bg-cover bg-center bg-no-repeat p-5 md:flex md:flex-col md:items-center md:m-w-[800px]"
			>
				<header className="text-white uppercase flex justify-between mt-5 items-center md:w-[760px] ">
					<h1 className="font-bold text-2xl letter-spacing md:text-4xl">todo</h1>
					<button>
						<img src="/img/icon-moon.svg" alt="dark-day-mode" />
					</button>
				</header>
				<InputsContainer />
				<ListContainer />
				<TodoFilters/>
			</div>
		</div>
	)
}

export default App
