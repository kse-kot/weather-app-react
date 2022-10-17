import React, { useState } from 'react'
import axios from 'axios'
import WeatherForecastDay from './WeatherForecastDay'
import './WeatherForecast.css'

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false)
	let [forecast, setForecast] = useState(null)

	function handleResponse(response) {
		console.log('here in forecast')
		console.log(response.data.daily)
		setForecast(response.data.daily)
		setLoaded(true)
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col pt-3">
						<WeatherForecastDay dayInfo={forecast[0]} />
					</div>
				</div>
			</div>
		)
	} else {
		let apiKey = 'eb9542c65e739e0fb25ade97c749e2aa'
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`

		axios.get(apiUrl).then(handleResponse)

		return null
	}
}
