import React, { Component } from 'react'
import{ connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
    
    
    renderWeather(cityData){
        const temps = cityData.list.map(weather=>weather.main.temp - 273.15)
        const pressure = cityData.list.map(weather=>weather.main.pressure)
        const humidity = cityData.list.map(weather=>weather.main.humidity)
        const lon = cityData.city.coord.lon
        const lat = cityData.city.coord.lat

        return (
            
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>{cityData.city.name} </td>
                <td><Chart data={temps} color="blue" units="°C"/></td>
                <td>
                        <Chart data={pressure} color="green" units="hPa"/>
                        
                </td>
                <td>
                        <Chart data={humidity} color="red" units="%"/>
                        
                </td>
            </tr>
        )
    }
    
    render(){
        
        
        return (
            
            <div>
                <table className ="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                City
                            
                            </th>
                            <th>
                                Temperature (°C)
                            
                            </th><th>
                                Pressure (hPa)
                            
                            </th><th>
                                Humidity (%)
                            
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    
                    
                    </tbody>
                </table>
            
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        weather:state.weather
        
    }
}

export default connect(mapStateToProps)(WeatherList)