import React, { useState, useEffect } from 'react'

export default function WeatherTemperature(props) {
	const [temperature, setTemperature] = useState({
		value: props.celcius,
		unit: 'celcius',
	})

	// rerender temperature if props change
	useEffect(() => {
		setTemperature({
			value: props.celcius,
			unit: 'celcius',
		})
	}, [props.celcius])

	function showFahrenheit(event) {
		event.preventDefault()
		setTemperature({
			value: Math.round(props.celcius * 1.8 + 32),
			unit: 'fahrenheit',
		})
	}

	function showCelcius(event) {
		event.preventDefault()
		setTemperature({ value: props.celcius, unit: 'celcius' })
	}

	return (
		<div className="WeatherTemperature inline-block">
			<div className="inline-block temperature">{temperature.value}</div>
			<div className="inline-block unit">
				<a
					href="#"
					className={temperature.unit == 'celcius' ? '' : 'active'}
					onClick={showCelcius}
				>
					&deg;C{' '}
				</a>
				|
				<a
					href="#"
					className={temperature.unit == 'fahrenheit' ? '' : 'active'}
					onClick={showFahrenheit}
				>
					{' '}
					&deg;F
				</a>
			</div>
		</div>
	)
}
