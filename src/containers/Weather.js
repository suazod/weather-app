import React, { Component } from 'react';
import WeatherImg from '../images/weather-app-bg_1.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { GeoAltFill } from 'react-bootstrap-icons';
import { ReactComponent as Sun } from '../sun.svg';
import moment from 'moment';
import Error from '../components/Error';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            isChecked: true,
            units: 'imperial',
            lat: '32.779167',
            lon: '-96.808891',
            currentWeatherLocationCity: 'Dallas',
            currentWeatherLocationState: 'TX',
            currentWeather: '',
            currentWeatherDesc: '',
            currentWeatherDate: '',
            currentWeatherIcon: '',
            searchCity: '',
            searchState: '',
            currentWeatherWind: '',
            dayOne: '',
            dayOneIcon: '',
            dayOneDay: '',
            dayTwo: '',
            dayTwoIcon: '',
            dayTwoDay: '',
            dayThree: '',
            dayThreeIcon: '',
            dayThreeDay: '',
            dayFour: '',
            dayFourIcon: '',
            dayFourDay: '',
            dayFive: '',
            dayFiveIcon: '',
            dayFiveDay: ''
        };
        this.handleUnitChange = this.handleUnitChange.bind(this);
        this.handleSearchBy = this.handleSearchBy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //initial weather 
    componentDidMount() {
        //show me the current and forcast weather!
        this.showWeather(this.state.units, this.state.lat, this.state.lon);
    }

    //toggle for metric vs imperial units
    handleUnitChange(event) {
        //toggle will set weather units
        !event.target.checked ? this.showWeather('metric', this.state.lat, this.state.lon) : this.showWeather('imperial', this.state.lat, this.state.lon);
        this.setState({
            isChecked: event.target.checked,//update the toggle state
            units: !event.target.checked ? 'metric' : 'imperial'//update units state
        })
    }

    //default to dallas,tx weather/forecast
    showWeather(units, lat, lon) {
        this.setState({ isLoaded: false })
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_KEY}`, {
            method: 'GET',
            headers: { Accept: 'application/json' }
        })
            .then(response => response.json())
            .then(json => {
                const data = json;
                this.setState({
                    currentWeather: parseFloat(data.current.temp).toFixed(),//current weather temp
                    currentWeatherDesc: data.current.weather[0].description,//current weather desc
                    currentWeatherDate: moment.unix(data.current.dt).format('dddd, MMM Do, YYYY'),//current date
                    currentWeatherWind: parseFloat(data.current.wind_speed).toFixed(),//current wind speed
                    currentWeatherIcon: data.current.weather[0].icon,//current weather icon
                    //day one weather details
                    dayOne: parseFloat(data.daily[0].temp.max).toFixed(),
                    dayOneIcon: data.daily[0].weather[0].icon,
                    dayOneDay: moment.unix(data.daily[0].dt).format('ddd'),
                    //day two weather details
                    dayTwo: parseFloat(data.daily[1].temp.max).toFixed(),
                    dayTwoIcon: data.daily[1].weather[0].icon,
                    dayTwoDay: moment.unix(data.daily[1].dt).format('ddd'),
                    //day three weather details
                    dayThree: parseFloat(data.daily[2].temp.max).toFixed(),
                    dayThreeIcon: data.daily[2].weather[0].icon,
                    dayThreeDay: moment.unix(data.daily[2].dt).format('ddd'),
                    //day four weather details
                    dayFour: parseFloat(data.daily[3].temp.max).toFixed(),
                    dayFourIcon: data.daily[3].weather[0].icon,
                    dayFourDay: moment.unix(data.daily[3].dt).format('ddd'),
                    //day five weather details
                    dayFive: parseFloat(data.daily[4].temp.max).toFixed(),
                    dayFiveIcon: data.daily[4].weather[0].icon,
                    dayFiveDay: moment.unix(data.daily[4].dt).format('ddd'),
                    isLoaded: true
                })
            });
    }

    //search by U.S. cities
    handleSubmit(event) {
        event.preventDefault();
        //first find lon and lat based on city/state
        //then update the states and show new city weather 
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.state.searchCity},${this.state.searchState},us&appid=${process.env.REACT_APP_WEATHER_KEY}`, {
            method: 'GET',
            headers: { Accept: 'application/json' }
        })
            .then(response => response.json())
            .then(json => {
                const data = json;
                if (data.length > 0 && data[0].country === 'US') {
                    this.setState({
                        lat: data[0].lat,//update lat
                        lon: data[0].lon,//update lon
                        currentWeatherLocationCity: data[0].name,//update the current weather city
                        currentWeatherLocationState: data[0].state,//update the current weather state
                        searchCity: '',//clear city field
                        searchState: '',//clear state field
                        error: false//hide error msg
                    });
                    //find specific city weather
                    this.showWeather(this.state.units, data[0].lat, data[0].lon);
                } else {
                    this.setState({
                        error: true,//show error msg
                        searchCity: '',//clear city field
                        searchState: '',//clear state field
                    })
                }
            });
    }

    //form controlled component
    handleSearchBy(event) {
        //update the input values onChange
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        return (
            <div className="weather-container">
                <div className="weather-inner">
                    <Sun />
                    {/* current location weather header */}
                    <div className="current-weather">
                        <span className="current-weather-location"><GeoAltFill />{this.state.currentWeatherLocationCity}, {this.state.currentWeatherLocationState}</span>
                        <span className="current-weather-date">{this.state.currentWeatherDate}</span>
                    </div>
                    {/* end current location weather header*/}
                    <div className="weather-inner-widget">
                        <div className="current-weather-info">
                            {/* current location weather */}
                            <div className="current-weather-information">
                                <span className="current-weather-info-degree">{this.state.currentWeather}<span>&#176;</span></span>
                                <span className="current-weather-info-icon"><img src={`http://openweathermap.org/img/wn/${this.state.currentWeatherIcon}.png`} alt="weather icon" /></span>
                                <span className="current-weather-info-text"><span>{this.state.currentWeatherDesc}</span> <span>{this.state.currentWeatherWind} mph</span></span>
                            </div>
                            {/* end current location weather */}
                            {/* toggle units */}
                            <div className="weather-toggle">
                                <label className="switch">
                                    <input type="checkbox" id="togBtn" onChange={this.handleUnitChange} checked={this.state.isChecked} />
                                    <div className="slider round">
                                        <span className="celci"></span>
                                    </div>
                                </label>
                            </div>
                            {/* end toggle units */}
                        </div>
                        {/* background image */}
                        <img className="weather-bg-img" src={WeatherImg} alt="weather app" />
                        {/* end background image */}
                        {/* five day forecast */}
                        <div className="forecast-container">
                            <Container>
                                <Row>
                                    <Col className="day-one">
                                        <div className="weather-day">{this.state.dayOneDay}</div>
                                        <div className="weather-icon"><img src={`http://openweathermap.org/img/wn/${this.state.dayOneIcon}.png`} alt="weather icon" /></div>
                                        <div className="weather-degree">{this.state.dayOne}<span>&#176;</span></div>
                                    </Col>
                                    <Col className="day-two">
                                        <div className="weather-day">{this.state.dayTwoDay}</div>
                                        <div className="weather-icon"><img src={`http://openweathermap.org/img/wn/${this.state.dayTwoIcon}.png`} alt="weather icon" /></div>
                                        <div className="weather-degree">{this.state.dayTwo}<span>&#176;</span></div>
                                    </Col>
                                    <Col className="day-three">
                                        <div className="weather-day">{this.state.dayThreeDay}</div>
                                        <div className="weather-icon"><img src={`http://openweathermap.org/img/wn/${this.state.dayThreeIcon}.png`} alt="weather icon" /></div>
                                        <div className="weather-degree">{this.state.dayThree}<span>&#176;</span></div>
                                    </Col>
                                    <Col className="day-four">
                                        <div className="weather-day">{this.state.dayFourDay}</div>
                                        <div className="weather-icon"><img src={`http://openweathermap.org/img/wn/${this.state.dayFourIcon}.png`} alt="weather icon" /></div>
                                        <div className="weather-degree">{this.state.dayFour}<span>&#176;</span></div>
                                    </Col>
                                    <Col className="day-five">
                                        <div className="weather-day">{this.state.dayFiveDay}</div>
                                        <div className="weather-icon"><img src={`http://openweathermap.org/img/wn/${this.state.dayFiveIcon}.png`} alt="weather icon" /></div>
                                        <div className="weather-degree">{this.state.dayFive}<span>&#176;</span></div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        {/* end five day forecast */}
                    </div>
                    {/* search by city form */}
                    <div className="search-form">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row className="justify-content-md-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="byCity" srOnly>City</Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="byCity"
                                        name="searchCity"
                                        placeholder="City"
                                        value={this.state.searchCity}
                                        onChange={this.handleSearchBy}
                                        required
                                    />
                                    <Form.Text className="text-muted">Example: Houston</Form.Text>
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="byState" srOnly>State</Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="byState"
                                        placeholder="State"
                                        name="searchState"
                                        value={this.state.searchState}
                                        onChange={this.handleSearchBy}
                                        required
                                    />
                                    <Form.Text className="text-muted">Example: TX</Form.Text>
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2">
                                        <GeoAltFill /> Change location
                                </Button>
                                    <Form.Text className="text-muted">U.S. cities only</Form.Text>
                                </Col>
                            </Form.Row>
                        </Form>
                    </div>
                    {/* end search by city form */}
                    {this.state.error ? <Error /> : null}
                </div>
            </div>
        )
    }
}
export default Weather;