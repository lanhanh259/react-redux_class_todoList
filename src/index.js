import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Details from './components/Details'
import './index.css'
import store from './redux/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}></Route>
					<Route path="/detail" element={<Details />}></Route>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
