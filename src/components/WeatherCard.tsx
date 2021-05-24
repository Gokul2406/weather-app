import WeatherInterface from "../weather-interface"
import {Text, Flex, Heading} from "@chakra-ui/react"
import {useEffect} from "react"

function WeatherCard({data}: WCProps) {
	
	useEffect(() => {
		console.log(data)
	}, [])

	return (
	<>
	{data && (
	<>
	<Flex background="blue.600" direction="column" p={12} borderRadius={60} >
	<Heading>Summary: {data.getCityByName.weather.summary.description}</Heading>
	<Text mt={3}>Country: {data.getCityByName.country}</Text>
	<Text>Summary: {data.getCityByName.weather.summary.title}</Text>
	<Text>Temparature: {data.getCityByName.weather.temperature.actual} K</Text>
	<Text>Feels Like: {data.getCityByName.weather.temperature.feelsLike} K</Text>
	<Text>Minimum Temparature: {data.getCityByName.weather.temperature.min} K</Text>
	<Text>Maximum Temparature: {data.getCityByName.weather.temperature.max} K</Text>
	</Flex>
	</>
	)}
	</>
	)
	
}

interface WCProps {
	data: WeatherInterface
}

export default WeatherCard
