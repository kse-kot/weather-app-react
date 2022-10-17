import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherForecastDay from './WeatherForecastDay'
import './WeatherForecast.css'

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false)
	let [forecast, setForecast] = useState(null)

	function handleResponse(response) {
		setForecast(response.data.daily)
		setLoaded(true)
	}

	useEffect(() => {
		setLoaded(false)
	}, [props.coordinates])

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row pt-3">
					{forecast.map(function (day, index) {
						if (index < 7) {
							return (
								<div className="col" key={index}>
									<WeatherForecastDay dayInfo={day} />
								</div>
							)
						} else {
							return null
						}
					})}
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
