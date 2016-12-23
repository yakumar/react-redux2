import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div><h2>React simple starter</h2>
      <SearchBar />
      <WeatherList />
     
      
      
      </div>
      
    );
  }
}