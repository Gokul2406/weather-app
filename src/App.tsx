import './App.css';
import WeatherCard from './components/WeatherCard';
import React from "react"

export default class App extends React.Component {
	componentDidMount() {
		localStorage.setItem("chakra-ui-color-mode", "dark")
	}
render() {
  return (
    <div className="App">
    <WeatherCard />
    </div>
  );
	}
}

