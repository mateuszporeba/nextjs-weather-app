import React, { useState, useEffect } from 'react';
import InputField from './InputField.js'
import styles from '@/styles/BrowseForecast.module.css';

//import bacgroundImage from '@/images/clouds_bacground.jpg';
import Button from 'react-bootstrap/Button';

export default function BrowseForecast(props) {

  const [inputValue, setInputValue] = useState('');

  const OnInputData = (inputCity) => {
    console.log('OnInputData:   '+ inputCity);
    setInputValue(inputCity);
    console.log('OnInputData inputValue:   '+inputValue);
  }

  const checkForecast = async () => {

    const result = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.NEXT_PUBLIC_API_KEY)
    if (result.status === 200) {
      const data = await result.json();
      console.log(data);
      props.forecastData(data);
    } else {
      console.log(result);
    }
  }

  // const checkForecast = () => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.NEXT_PUBLIC_API_KEY)
  //     .then(res => res.json())
  //     .then(data => props.forecastData(data))
  //     .catch(error => console.log("ERROR"));
  //     console.log('checkForecastKurwa');
  // }

  const clickHandler = () => {
    //setForecast(true);
    console.log('clickHandler   :'+inputValue);
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
