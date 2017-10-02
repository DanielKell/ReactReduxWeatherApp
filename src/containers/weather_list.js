import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    //Used to render a single city in the array
    renderWeather(cityData) {
        const name=cityData.city.name; //The city's name, from the data object
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        return (
            <tr key={name}>
                <td><GoogleMap  lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="orange" units="K"/> 
                </td>
                <td>
                    <Chart data={humidities} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="%"/>
                </td>
            </tr>
        );
    }


    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    {/*This is using the renderWeather function on each object*/}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps ({weather}) {
    return {weather}; //Pulling from the reducer.
}

// Non ES6 version:
// function mapStatetoProps (state) {
//     return {weather: state.weather}; //Pulling from the reducer
// }

export default connect (mapStateToProps)(WeatherList);
//Now we have access to this.props.weather inside WeatherList!