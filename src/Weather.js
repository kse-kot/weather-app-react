import React from 'react'
import './Weather.css'

export default function Weather() {
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
							<img
								alt="sun"
								src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
							/>
							<div className="inline-block temperature">22</div>
							<div className="inline-block unit">&deg;C</div>
						</div>
					</div>
					<ul>
						<li>Precipitation: 10%</li>
						<li>Humidity: 95%</li>
						<li>Wind: 2 km/h</li>
					</ul>
				</div>
				<div className="col-4">
					<ul>
						<li>
							<h1>Tokyo, Japan</h1>
						</li>
						<li>Tuesday 01:00</li>
						<li>Clear</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
