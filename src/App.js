import './App.css'
import TodoList from './components/TodoList'

function App() {
	return (
		<div className="App">
			<h1
				style={{
					padding: '10px 0',
					marginBottom: '20px',
					backgroundColor: '#0054a5',
				}}
			>
				React-Redux Class
			</h1>
			<TodoList />
		</div>
	)
}

export default App
