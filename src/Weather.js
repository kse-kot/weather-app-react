import React, { useState } from 'react'
import axios from 'axios'

import './Weather.css'

export default function Weather(props) {
	const [weatherInfo, setWeatherInfo] = useState({ ready: false })
	function handleResponse(response) {
		setWeatherInfo({
			ready: true,
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			date: 'Tuesday 01:00',
			iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		})
		console.log(response)
	}

	if (weatherInfo.ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city ..."
								className="form-control"
								autoFocus="on"
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
				<div className="row">
					<div className="col-8">
						<div className="row">
							<div className="col-12">
								<img alt="sun" src={weatherInfo.iconUrl} />
								<div className="inline-block temperature">
									{weatherInfo.temperature}
								</div>
								<div className="inline-block unit">&deg;C</div>
							</div>
						</div>
						<ul>
							<li>Humidity: {weatherInfo.humidity} %</li>
							<li>Wind: {weatherInfo.wind} km/h</li>
						</ul>
					</div>
					<div className="col-4">
						<ul>
							<li>
								<h1>{props.city}</h1>
							</li>
							<li>{weatherInfo.date}</li>
							<li className="text-capitalize">
								{weatherInfo.description}
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	} else {
		let apiKey = '63608bc5eef30d17258d77a3cb58927f'
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${props.city}&appid=${apiKey}`

		axios.get(apiUrl).then(handleResponse)
		return 'Loading ...'
	}
}
