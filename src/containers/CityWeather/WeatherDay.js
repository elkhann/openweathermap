import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import WeatherDay from '../../components/CityWeather/WeatherDay';

const WeatherDayContainer = ({ list }) => {
  moment.locale('ru');
  const day = moment.unix(list.dt).format('D MMMM');
  const time = moment.unix(list.dt).format('HH:mm');
  const weatherId = list.weather[0].id;
  const weatherDecription = list.weather[0].description;
  const temp = Math.round(list.main.temp);

  return (
    <div>
      {list && (
        <WeatherDay
          day={day}
          time={time}
          weatherId={weatherId}
          weatherDecription={weatherDecription}
          temp={temp}
        />
      )}
    </div>
  );
};

export default WeatherDayContainer;
