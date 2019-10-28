import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import City from '../../components/Cities/City';

const CityConteiner = ({ city }) => {
  let dayData,
    day,
    weatherId,
    weatherDecription,
    temp = '';

  if (city.cod === '200') {
    dayData = city.list[0];
    day = moment.unix(dayData.dt).format('D MMMM');
    weatherId = dayData.weather[0].id;
    weatherDecription = dayData.weather[0].description;
    temp = Math.round(dayData.main.temp);
  }

  return (
    <div>
      {dayData && (
        <City
          city={city}
          day={day}
          weatherId={weatherId}
          weatherDecription={weatherDecription}
          temp={temp}
        />
      )}
    </div>
  );
};

export default CityConteiner;
