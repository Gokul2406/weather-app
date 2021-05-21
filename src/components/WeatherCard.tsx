import React from "react"

export default class WeatherCard extends React.Component<{}, WCState> {
	constructor(props: any) {
		super(props)
		this.state = {
			cityName: ""
		}
	}		
	render() {
		return (
			<h1>Hello from WeatherCard </h1>
		)
	}
}

interface WCState {
	cityName: string
}
