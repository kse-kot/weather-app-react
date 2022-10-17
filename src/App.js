import Weather from './Weather'
import './App.css'

function App() {
	return (
		<div className="App pt-5">
			<div className="container">
				<h1 className="text-center text-primary">Weather App</h1>
				<Weather city="Vinnytsia" />
				<footer>
					<a
						className="AuthorLink"
						href="https://github.com/kse-kot/weather-app-react"
						target="_blank"
						rel="noreferrer"
					>
						Open-source
					</a>{' '}
					code by <strong>Kseniia K</strong>
				</footer>
			</div>
		</div>
	)
}

export default App
