import React, { useState, useRef } from 'react';
import InputField from './InputField.js'
import styles from '@/styles/BrowseForecast.module.css';

import Button from 'react-bootstrap/Button';

export default function BrowseForecast(props) {
  const inputRef = useRef(null);
  //const [inputValue, setInputValue] = useState('');

  // const OnInputData = (inputCity) => {
  //   //console.log('OnInputData:   '+ inputCity);
  //   setInputValue(inputCity);
  //   console.log('OnInputData inputValue:   ' + inputValue);
  // }

  const checkForecast = async (inputValue) => {
    // console.log('inputRef:    '+ inputRef.current);
     console.log('checking Forecast for: ' + inputValue);
    try {
      const result = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.NEXT_PUBLIC_API_KEY)
      if (result.status === 200) {
        const data = await result.json();
        console.log(data);
        props.forecastData(data);
      } else {
        console.log(result);
      }
    }catch{
      
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
    // console.log('clickHandler   :' + inputCity);
    // console.log('inputRef:    '+ inputRef.current.value);
    checkForecast(inputRef.current.value);
    //checkForecast(inputCity);
  }

  return (
    <div className={styles.browseForecastContainer}>

      <InputField {...props} demoText={'demoText'} recommendedCityClick={() => checkForecast(inputRef.current?.value)} ref={inputRef}/>

      <div className={styles.buttonPadding}>
        <Button variant="primary" onClick={clickHandler}>
          Check Forecast!
        </Button>
      </div>

    </div >
  )
}
// return (
//   <div className={styles.browseForecastContainer}>

//     <InputField forecastInputValue={OnInputData} recommendedCityClick={clickHandler} />

//     <div className={styles.buttonPadding}>
//       <Button variant="primary" onClick={clickHandler}>
//         Check Forecast!
//       </Button>
//     </div>

//   </div >
// )