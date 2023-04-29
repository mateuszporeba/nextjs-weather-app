import React, { useState } from 'react';

import citiesData from './Cities_list.json';
import { v4 as uuidv4 } from 'uuid';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '@/styles/InputField.module.css';

import 'bootstrap/dist/css/bootstrap.css';

export default function InputField(props) {

  const [inputValue, setInputValue] = useState("");
  const [recommendedCities, setRecommendedCities] = useState(true);

  const onChangeInputHandler = (event) => {
    console.log()
    if (citiesData.filter(city => city.name.toLowerCase().startsWith(event.target.value.toLowerCase())).length > 0) {
      setInputValue(event.target.value);
      props.forecastInputValue(event.target.value);
      setRecommendedCities(true);
    }
    if(event.target.value.length < inputValue.length){
      setRecommendedCities(true);
    }
    //console.log(citiesData.filter(city => city.name.startsWith('Wa' || 'wa')));
  }

  const onClickDropDownHandler = (cityName) => {
    setInputValue(cityName);
    props.forecastInputValue(cityName);
    props.recommendedCityClick();
    setRecommendedCities(false);
  }

  // {
  //   citiesData.filter(city => city.name.toLowerCase().startsWith(inputValue.toLowerCase())).map(
  //     cityName => (
  //       <Dropdown.Item key={cityName.name} onClick={ () => onClickDropDownHandler(cityName.name)}>{cityName.name}</Dropdown.Item>
  //     ))}
//   <Dropdown.Menu className='dropdown-menu'>
  return (
    <div>

      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown">
          <input value={inputValue} onChange={onChangeInputHandler}></input>
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
}
