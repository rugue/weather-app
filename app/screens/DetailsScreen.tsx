import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

// Import or define the WeatherData type here
type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    description: string;
  }>;
  wind: {
    speed: number;
  };
};

const DetailsScreen: React.FC = () => {
  const params = useLocalSearchParams();
  const weatherData = JSON.parse(params.weatherData as string);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Details</Text>
      <Text>Humidity: {weatherData.main.humidity}%</Text>
      <Text>Wind Speed: {weatherData.wind.speed} m/s</Text>
      <Text>Pressure: {weatherData.main.pressure} hPa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default DetailsScreen;
