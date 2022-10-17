import React from 'react'
import FormattedDate from './FormattedDate'
import WeatherIcon from './WeatherIcon'
import WeatherTemperature from './WeatherTemperature'

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="row">
				<div className="col-8">
					<div className="row">
						<div className="col-12">
							{/* <img alt="sun" src={props.data.iconUrl} /> */}
							<div className="inline-block icon">
								<WeatherIcon code={props.data.icon} size={52} />
							</div>
							<WeatherTemperature
								celcius={props.data.temperature}
							/>
						</div>
					</div>
					<ul>
						<li>Humidity: {props.data.humidity} %</li>
						<li>Wind: {props.data.wind} km/h</li>
					</ul>
				</div>
				<div className="col-4">
					<ul>
						<li>
							<h1>{props.data.city}</h1>
						</li>
						<li>
							<FormattedDate date={props.data.date} />
						</li>
						<li className="text-capitalize">
							{props.data.description}
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
