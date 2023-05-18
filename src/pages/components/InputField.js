import React, { useState, forwardRef } from 'react';

import citiesData from './Cities_list.json';
import { v4 as uuidv4 } from 'uuid';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '@/styles/InputField.module.css';

import 'bootstrap/dist/css/bootstrap.css';

//export default function InputField(props) {

//const InputField = forwardRef((ref, props) => {
// const InputField = forwardRef(({ refValue }, ref, ...props) => {
const InputField = forwardRef(({ refValue, ...props }, ref) => {
  const [inputValue, setInputValue] = useState("");
  const [recommendedCities, setRecommendedCities] = useState(true);
  const [checkInput, setCheckInput] = useState(true);

  const onChangeInputHandler = (event) => {
    if (checkInput) {

      if (citiesData.filter(city => city.name.toLowerCase().startsWith(event.target.value.toLowerCase())).length > 0) {
        setInputValue(event.target.value);
        //refValue = event.target.value;
        //props.forecastInputValue(event.target.value);
        //onCheckForecast(event.target.value);
        //console.log('onChangeInputHandler!!!!');
        setRecommendedCities(true);
      }
      if (event.key === 'Backspace') {
        setRecommendedCities(true);
      }
    }
  }

  const onClickDropDownHandler = async (cityName) => {
    await setInputValue(cityName);
    props.recommendedCityClick();
    setRecommendedCities(false);
  }
  // const onClickDropDownHandler = (cityName) => {
  //   setCheckInput(false);
  //   setInputValue(cityName);
  //   //props.forecastInputValue(inputValue);
  //   //props.forecastInputValue(cityName);
  //   //onCheckForecast(cityName);
  //   props.recommendedCityClick();
  //   //props.recommendedCityClick(cityName);
  //   setRecommendedCities(false);
  //   setCheckInput(true);
  // }
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown">
          <input {...props} value={inputValue} ref={ref} onChange={onChangeInputHandler}></input>
        </Dropdown.Toggle>
        {recommendedCities &&
          <Dropdown.Menu className={styles.dropdownMenu}>
            {
              citiesData.filter(city => city.name.toLowerCase().startsWith(inputValue.toLowerCase())).map(
                cityName => (
                  <Dropdown.Item key={uuidv4()} onClick={() => onClickDropDownHandler(cityName.name)}>{cityName.name}</Dropdown.Item>
                ))}

          </Dropdown.Menu>
        }
      </Dropdown>

    </div>
  )
});
export default InputField;
