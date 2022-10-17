import React, { useState } from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'
import WeatherForecast from './WeatherForecast'

import './Weather.css'

export default function Weather(props) {
	const [weatherInfo, setWeatherInfo] = useState({ ready: false })
	const [city, setCity] = useState(props.city)

	function handleResponse(response) {
		console.log(response.data)
		setWeatherInfo({
			ready: true,
			coordinates: response.data.coord,
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			date: new Date(response.data.dt * 1000),
			iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			icon: `${response.data.weather[0].icon}`,
			city: response.data.name,
		})
	}

	function handleCityChange(event) {
		setCity(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		search()
	}

	function search() {
		let apiKey = '63608bc5eef30d17258d77a3cb58927f'
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

		axios.get(apiUrl).then(handleResponse)
	}

	if (weatherInfo.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city ..."
								className="form-control"
								autoFocus="on"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherInfo} />
				<WeatherForecast coordinates={weatherInfo.coordinates} />
			</div>
		)
	} else {
		search()
		return 'Loading ...'
	}
}
