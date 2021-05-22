import './App.css';
import WeatherSearch from './components/WeatherSearch';
import React from "react"

export default class App extends React.Component {
	componentDidMount() {
		localStorage.setItem("chakra-ui-color-mode", "dark")
	}
render() {
  return (
    <div className="App">
    <WeatherSearch />
    </div>
  );
	}
}

