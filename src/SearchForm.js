import React, { useState } from 'react'
import axios from 'axios'

export default function SearchForm() {
	let apiKey = '63608bc5eef30d17258d77a3cb58927f'
	let units = 'metric'
	let apiUrl = ''
	const [city, setCity] = useState('')
	const [weatherInfo, setWeatherInfo] = useState({})
	const [showWeatherInfo, setShowWeatherInfo] = useState(false)

	function showWeatherResults(response) {
		setWeatherInfo({
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		})
		setShowWeatherInfo(true)
	}

	function getCity(event) {
		setCity(event.target.value)
	}

	function searchWeather(event) {
		event.preventDefault()
		apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=${units}&q=${city}&appid=${apiKey}`
		axios.get(apiUrl).then(showWeatherResults)
	}

	let form = (
		<form onSubmit={searchWeather}>
			<input type="search" onChange={getCity} />
			<input type="submit" />
		</form>
	)

	if (showWeatherInfo) {
		return (
			<div className="SearchForm">
				{form}
				<ul style={{ display: showWeatherInfo ? 'block' : 'none' }}>
					<li>Temperature: {weatherInfo.temperature}&deg;C</li>
					<li>Description: {weatherInfo.description}</li>
					<li>Humidity: {weatherInfo.humidity} %</li>
					<li>Wind: {weatherInfo.wind} km/h</li>
					<li>
						<img src={weatherInfo.iconUrl} alt="weather icon" />
					</li>
				</ul>
			</div>
		)
	} else {
		return <div className="SearchForm">{form}</div>
	}
}
