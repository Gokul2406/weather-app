import {Heading, Flex} from "@chakra-ui/layout"
import {FormLabel, Input, Button} from "@chakra-ui/react"
import React, {ChangeEvent} from "react"

export default class WeatherCard extends React.Component<{}, WCState> {
	constructor(props: any) {
		super(props)
		this.state = {
			cityName: ""
		}
	}		


	render() {
		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			this.setState({cityName: e.target.value})
			console.log(this.state.cityName)
		}
		return (
			<Flex alignItems="center" justifyContent="center" height="100vh" >
				<Flex background="gray.600" padding={12} direction="column">
					<Heading mb={6}>Weather </Heading>
					<FormLabel>Name of City</FormLabel>
					<Input value={this.state.cityName} onChange={handleChange} isRequired placeholder="City Name" variant="outline" />
					<Button mt={6} colorScheme="teal" >Get Weather Info </Button>
				</Flex>
			</Flex>
		)
	}
}

interface WCState {
	cityName: string
}
