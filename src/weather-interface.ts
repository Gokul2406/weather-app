export default interface WeatherInterface {
	getCityByName: {
		name: string,
		country: string,
		weather: {
			summary: {
				title: string,
				description: string
			},
			temparature: {
				actual: number,
				feelsLike: number,
				min: number,
				max: number
			}
		}
	}

}
