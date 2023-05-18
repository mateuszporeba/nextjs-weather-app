import React, { useState, useEffect } from 'react';
import styles from '../styles/App.module.css';

import WeatherData from './components/WeatherData.js';
import BrowseForecast from './components/BrowseForecast.js';

import bgImage from '@/image/wallpaper_cloud.jpg';

function App() {
  const [data, setData] = useState({});
  const [showForecast, setShowForecast] = useState(false);

  const onForecastData = (forecastObj) => {
    setData(forecastObj)
    setShowForecast(true);
  }

  let dataContent = '';
  if (data != null || data != {}) {
    dataContent = <WeatherData data={data} />
  }

  // /{showForecast &&  <WeatherData data={data} />}

  //<div className={styles.container} style={{ backgroundImage: `url(${headerImg})`}}>
  return (
    <div>
      <div className={styles.container} style={{ backgroundImage: `url(${bgImage})` }}>

        <div className={styles.headerContainer} ></div>
        <div className={styles.header}>
          <h1 className=''>Weather Forecast</h1>
        </div>

        <BrowseForecast forecastData={onForecastData} />

        {showForecast && dataContent}
      </div>
    </div>
  );
}

export default App;