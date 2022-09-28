export default function FormattedDate(props) {
	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

	let day = days[props.date.getDay()]
	let hours = props.date.getHours()
	let minutes = props.date.getMinutes()
	hours = hours < 10 ? `0${hours}` : hours
	minutes = minutes < 10 ? `0${minutes}` : minutes

	return `${day} ${hours}:${minutes}`
}
