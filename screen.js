import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import moment from 'moment';
import { fetchWeatherForecast } from './services';
import { fetchWeather } from './redux/weatherAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const [city,setCity]=useState('gurugram')
  const dispatch = useDispatch();
  const { forecast, loading, error } = useSelector(state => state.weather);
  useEffect(() => {
    dispatch(fetchWeather('gurugram'));
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>5-Day Weather Forecast of {city}</Text>
      <FlatList
       keyExtractor={item => item.dt}
      data={forecast}
      renderItem={({item}) =>
      {
     
        return(
        <View key={item.dt} style={styles.forecastItem}>
        <Text>{moment.unix(item.dt).format('ddd, MMM D')}</Text>
        <Text>{item?.weather[0]?.main}</Text>
        <Text>Temp: {item.main.temp} °C</Text>
      </View>
      )
      }
    
       }
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forecastItem: {
    marginBottom: 15,
    alignItems: 'center',
  },
});

