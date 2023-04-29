import React, { useState, useEffect } from 'react';
import InputField from './InputField.js'
import styles from '@/styles/BrowseForecast.module.css';

//import bacgroundImage from '@/images/clouds_bacground.jpg';
import Button from 'react-bootstrap/Button';

export default function BrowseForecast(props) {

  const [inputValue, setInputValue] = useState("London");

  const OnInputData = (inputCity) => {
    setInputValue(inputCity);
  }

  // useEffect(() => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //     .then(res => res.json())
  //     .then(data => props.forecastData(data))
  //     .catch(error => console.log("ERROR"));
  // }, [inputValue]);

  // const checkForecast = () => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //     .then(res => {
  //       if (res.status === 200) {
  //         res.json();
  //         console.log('res.json() works');
  //       } else {
  //         throw new Error('Something went wrong');
  //       }
  //       console.log(res);
  //       console.log(res.ok);
  //       console.log(res.status);
  //     })
  //     .then(data => props.forecastData(data))
  //     .then(data => console.log(data))
  //     .catch(error => console.log("ERROR"));
  // }
  // const checkForecast = async () => {
  //   await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //     .then(res => {
  //       console.log(res.status)
  //       if (res.status !== 200) {
  //         console.log('tutaj');
  //         throw new Error('Something went wrong');
  //       }
  //       console.log('res ' + res);
  //       res.json();
  //       console.log('res ' + res);
  //     })
  //     .then(data => {
  //       props.forecastData(data)
  //       console.log(data);
  //     }
  //     )
  //     .then(data => console.log(data))
  //     .catch(error => console.log("ERROR"));
  // }
  // const checkForecast1 = () => {
  //     fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //       .then(res => res.json())
  //       .then(data => props.forecastData(data))
  //       .then(data => console.log(data))
  //       .catch(error => console.log("ERROR"));
  // }
  // const [forecast, setForecast] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //     result.json().then(json => {
  //       props.forecastData(json);
  //       setForecast(false);
  //       console.log(result);
  //     })
  //   }
  //   fetchData();
  // }, [forecast]);

  const [forecast, setForecast] = useState(false);

  //   useEffect(() => {
  //     console.log("useEffect");
  //     const fetchData = async () => {
  //       const result = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)

  //       const data = await result.json();
  //       return props.forecastData(data);
  //         //  props.forecastData(data);
  //         // setForecast(false);
  //         // console.log(data);
  //   }

  //     fetchData();
  // }, [forecast]);

  const checkForecast1 = async () => {

    await fetch("/charge/pay", headers).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      return response;
    }).then((returnedResponse) => {
      // Your response to manipulate
      this.setState({
        complete: true
      });
    }).catch((error) => {
      // Your error is here!
      console.log(error)
    });
  }


  const checkForecast = async () => {

    console.log("ASYNCCHECKFORECAST");
    const result = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.NEXT_PUBLIC_API_KEY)
    if (result.status === 200) {
      const data = await result.json();
      console.log(data);
      props.forecastData(data);
    } else {
      console.log(result);
    }
    console.log(result);
    console.log(result.ok);
    console.log(result.status);
  }

  // const checkForecast = () => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.NEXT_PUBLIC_API_KEY)
  //     .then(res => res.json())
  //     .then(data => props.forecastData(data))
  //     .catch(error => console.log("ERROR"));
  //     console.log('checkForecastKurwa');
  // }

  const clickHandler = () => {
    setForecast(true);

    console.log('klik');
    checkForecast(inputValue);
  }

  return (
    <div className={styles.browseForecastContainer}>

      <InputField forecastInputValue={OnInputData} recommendedCityClick={clickHandler} />

      <div className={styles.buttonPadding}>
        <Button variant="primary" onClick={clickHandler}>
          Check Forecast!
        </Button>
      </div>

    </div >
  )
}
