export default interface WeatherInterface {
	getCityByName: {
		name: string,
		country: string,
		weather: {
			summary: {
				title: string,
				description: string
			},
			temperature: {
				actual: string,
				feelsLike: number,
				min: number,
				max: number
			}
		}
	}

}
