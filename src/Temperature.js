import React from 'react';
import './Temperature.css';

function Temperature() {
    const temperature = '24.4';
    const wilgotnosc = '44.4';

  return (
    <>
    <div class='main'>
      <div class='temperature_main'>
          <div class='temperature_name'>Temperatura:</div>
          <div class='temperature'>{temperature} *C</div>
      </div>
      <div class='wilgotnosc_main'>
          <div class='wilgotnosc_name'>Wilgotnosc:</div>
          <div class='wilgotnosc'>{wilgotnosc} %</div>      
      </div>
      <div class='time_main'>
          <div class='time_name'>Czas:</div>
          <div class='time'>25.05.2022 15:24</div>      
      </div>
      </div>
    </>
  )
}

export default Temperature
