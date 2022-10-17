import React from 'react'
import axios from 'axios'
import WeatherIcon from './WeatherIcon'
import './WeatherForecast.css'

export default function WeatherForecast(props) {
	let apiKey = 'eb9542c65e739e0fb25ade97c749e2aa'
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`

	function handleResponse(response) {
		console.log('here in forecast')
		console.log(response)
	}
	axios.get(apiUrl).then(handleResponse)

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Thu</div>
					<WeatherIcon code="10d" size={36} />
					<div className="WeatherForecast-temperatures">
						<span className="WeatherForecast-temperature-max">
							14&deg;
						</span>
						<span className="WeatherForecast-temperature-min">
							10&deg;
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
