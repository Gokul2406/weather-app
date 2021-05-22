import {useLazyQuery} from "@apollo/client"
import {Heading, Flex} from "@chakra-ui/layout"
import {FormLabel, Input, Button, Text} from "@chakra-ui/react"
import React, {ChangeEvent, useState} from "react"
import {WEATHER_QUERY} from "./gql/Queries"

const WeatherCard: React.FC = () => {


	const [cityName, setCityName] = useState<string>("")
	const [finalCity, setFinalCity] = useState<string>("")	
	const [getWeather, {loading, error, data}] = useLazyQuery(WEATHER_QUERY, {
		variables: {name: finalCity}
	})

	if (loading) return <Text>Loading </Text>
	if (error) return <Text>An error occured</Text>
	if (data) {
		console.log(data)
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCityName(e.target.value)
	}
		
	return (
		<Flex alignItems="center" justifyContent="center" height="100vh" >
			<Flex background="gray.600" padding={12} direction="column">
				<Heading mb={6}>Weather </Heading>
				<FormLabel>Name of City</FormLabel>
				<Input mb={3} value={cityName} onChange={handleChange} isRequired placeholder="City Name" variant="outline" />
				<Button onClick={() => {
					setFinalCity(cityName)
					getWeather()
					}} colorScheme="teal">Get Weather Information</Button>
			</Flex>
		</Flex>
		)
	}

 export default WeatherCard
