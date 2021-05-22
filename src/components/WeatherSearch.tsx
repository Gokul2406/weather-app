import {useLazyQuery} from "@apollo/client"
import {Heading, Flex} from "@chakra-ui/layout"
import {FormLabel, Input, Button, Text} from "@chakra-ui/react"
import React, {ChangeEvent, useState} from "react"
import {WEATHER_QUERY} from "./gql/Queries"
import WeatherCard from "./WeatherCard"

const WeatherSearch: React.FC = () => {


	const [cityName, setCityName] = useState<string>("")
	const [finalCity, setFinalCity] = useState<string>("")	
	const [getWeather, {loading, error, data}] = useLazyQuery(WEATHER_QUERY, {
		variables: {name: finalCity}
	})
	const [ready, setReady] = useState<boolean>(false)

	if (loading) return <Text>Loading </Text>
	if (error) return <Text>An error occured</Text>

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCityName(e.target.value)
	}
		
	return (
	<>
		<Flex direction="column" alignItems="center" justifyContent="center" height="50vh">
			<Flex background="gray.600" padding={12} direction="column">
				<Heading mb={6}>Weather </Heading>
				<FormLabel>Name of City</FormLabel>
				<Input mb={3} value={cityName} onChange={handleChange} isRequired placeholder="City Name" variant="outline" />
				<Button onClick={() => {
					setFinalCity(cityName)
					setReady(true)
					getWeather()
					}} colorScheme="teal">Get Weather Information</Button>
			</Flex>
		</Flex>
		<Flex direction="column" alignItems="center" justifyContent="center" height="50vh">
			
			{ready ? <WeatherCard data={data} /> : null}
		</Flex>
	</>
		)
	}

 export default WeatherSearch
