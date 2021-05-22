import {useLazyQuery} from "@apollo/client"
import {WEATHER_QUERY} from "./gql/Queries"
import {Button, Text} from "@chakra-ui/react"


const WeatherReq: React.FC<WRProps> = ({name}) => {
	const [getWeather, {loading, error, data}] = useLazyQuery(WEATHER_QUERY, {
		variables: {name: name}
	})
	
	if (loading) return <Text>Loading...</Text>
	if (data) {
	console.log(data)
	}

	return (
	<Button onClick={() => getWeather()} colorScheme="teal">GetWeather Info </Button>
	)
} 

interface WRProps {
	name: string
}

export default WeatherReq
