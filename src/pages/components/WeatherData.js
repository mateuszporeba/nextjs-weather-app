import React from 'react'

import Table from 'react-bootstrap/Table';
import styles from '@/styles/WeatherData.module.css';

export default function WeatherData(props) {

    const data = props.data;

    const weatherImg = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    //colSpan={2}

    const formattedTime = (unix_timestamp) => {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }
console.log(data);
    return (
        <div className={styles.dataContainer}>
            <div className={styles.weatherDataContainer}>

                <Table striped bordered hover>


                    <thead>
                        <tr>
                            <th colSpan={4} style={{textAlign: "center"}}>{data.name}</th>
                        </tr>

                        <tr>
                            <th>Temperature</th>
                            <th>Wind</th>
                            <th>Desciption</th>
                            <th>Other</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Actual: {data.main.temp} °C</td>
                            <td>Speed:    {data.wind.speed}</td>
                            <td>Main: {data.weather[0].main}</td>
                            <td>Sunrise: {formattedTime(data.sys.sunrise)}</td>
                        </tr>
                        <tr>
                            <td>Min: {data.main.temp_min} °C</td>
                            <td>Deg:    {data.wind.deg}</td>
                            <td><img src={weatherImg}></img></td>
                            <td>Sunset: {formattedTime(data.sys.sunset)}</td>
                        </tr>
                        <tr>
                            <td>Max: {data.main.temp_max} °C</td>
                            <td>Gust:    {data.wind.gust}</td>
                            <td>{data.weather[0].description}</td>
                            <td>Pressure: {data.main.pressure}</td>
                        </tr>
                    </tbody>

                </Table>
            </div>

        </div >
    )
}
