import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import './App.css';

import Weather from './components/Weather';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

const API_KEY = 'f736811e918ca981c13e61311f520686';


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperture: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperture: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a valid City and Country"
      });
    }
  }
  render() {
    return (
      <Container className="background" >
        <Row >
          <Col md="12" className="text">
            <Titles />
            <p className="header">Enter your details:</p>
            <Form getWeather={this.getWeather} />
            <Weather
              temperture={this.state.temperture}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </Col>

        </Row>


      </Container>

    );
  }
};

export default App;