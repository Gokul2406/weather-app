import WeatherInterface from "../weather-interface"
import {Text} from "@chakra-ui/react"

function WeatherCard({data}: WCProps) {
	return (
	<>
	{data && (
	<>
	<Text>City Name {data.getCityByName.name}</Text>
	<Text>Country {data.getCityByName.country}</Text>
	</>
	)}
	</>
	)
	
}

interface WCProps {
	data: WeatherInterface 
}

export default WeatherCard
