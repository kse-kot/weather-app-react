import React from 'react'
import WeatherIcon from './WeatherIcon'

export default function WeatherForecastDay(props) {
	function temperatureMax() {
		let temperature = Math.round(props.dayInfo.temp.max)
		return `${temperature}°`
	}

	function temperatureMin() {
		let temperature = Math.round(props.dayInfo.temp.min)
		return `${temperature}°`
	}

	function day() {
		let day = new Date(props.dayInfo.dt * 1000).getDay()
		let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		return days[day]
	}

	return (
		<div>
			<div className="WeatherForecast-day">{day()}</div>
			<WeatherIcon
				code={props.dayInfo.weather[0].icon}
				size={36}
				color="#d63384"
			/>
			<div className="WeatherForecast-temperatures">
				<span className="WeatherForecast-temperature-max">
					{temperatureMax()}
				</span>
				<span className="WeatherForecast-temperature-min">
					{temperatureMin()}
				</span>
			</div>
		</div>
	)
}
