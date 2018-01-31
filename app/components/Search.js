import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.getCurrentWeather = this.getCurrentWeather.bind(this);
        this.getForecastedWeather = this.getForecastedWeather.bind(this);
        this.updateInputState = this.updateInputState.bind(this);
    
        this.state = {
            value: "",
            currentTemp: "",
            currentMinTemp: "",
            currentMaxTemp: "",
            currentWeatherDescription: "",
            currentWeatherIcon: "",
            cityName: ""
        };
    }

    updateInputState(event) {
        this.setState({value: event.target.value});
    }

    getCurrentWeather(event) {
        let self = this;
        console.log("Search Input on submit: " + this.state.value);

        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather/?q=${self.state.value}&type=accurate&appid=c0c4a4b4047b97ebc5948ac9c48c0559`
            )
            .then(function(response) {
                console.log(response.data);
                self.setState({
                    currentTemp: self.state.currentTemp + response.data.main.temp,
                    currentMinTemp: self.state.currentMinTemp + response.data.main.temp_min,
                    currentMaxTemp: self.state.currentMaxTemp + response.data.main.temp_max,
                    currentWeatherDescription: self.state.currentWeatherDescription + response.data.weather[0].description,
                    currentWeatherIcon: self.state.currentWeatherIcon + response.data.weather[0].icon,
                    cityName: self.state.cityName + response.data.name
                });
            })
            .catch(function(error) {
                console.error(error);
            });

        event.preventDefault();
    }
    
    getForecastedWeather(event) {
        let self = this;
        console.log("Search Input on submit: " + this.state.value);
        
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/forecast/daily/?q=${self.state.value}&type=accurate&appid=c0c4a4b4047b97ebc5948ac9c48c0559&cnt=5`
            )
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });

        event.preventDefault();
    }
    
    render() {
        return (
            <div className="search" >
                <form className="weather-input-form" onSubmit={this.getForecastedWeather} style={{ flexDirection: this.props.flexDirection }}>
                    <input type="text" placeholder="Boise, Idaho" value={this.state.value} onChange={this.updateInputState} />
                    <input type="submit" value="Get Weather" />
                </form>
                {/*<input type="text" placeholder="Boise, Idaho"/>
                <button type="button">Get Weather</button>*/}
            </div>
        )
    }
}