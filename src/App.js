import SearchForm from './SearchForm'
import './App.css'

function App() {
	return (
		<div className="App">
			<h1>Weather App</h1>
			<SearchForm />
			<div className="AuthorDiv">
				<a
					className="AuthorLink"
					href="https://github.com/kse-kot/weather-app-react"
					target="_blank"
					rel="noreferrer"
				>
					Open-source
				</a>{' '}
				code by <strong>Kseniia K</strong>
			</div>
		</div>
	)
}

export default App
