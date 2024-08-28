import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { useRouter } from "expo-router";

// Define the WeatherData type
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

// Define the RootStackParamList
type RootStackParamList = {
  Home: undefined;
  Details: { weatherData: any };
};

// Define the navigation prop type
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const API_KEY = "555a78790369426dfb64a4a77a0652ea";
  const CITY = "London";

  const fetchWeatherData = async () => {
    // We'll implement this in the next step
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Data:", error.response.data);
          console.error("Status:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error:", error.message);
        }
      } else {
        console.error("Non-Axios error:", error);
      }
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Failed to load weather data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{weatherData.name}</Text>
      <Text style={styles.temperature}>
        {Math.round(weatherData.main.temp)}°C
      </Text>
      <Text style={styles.description}>
        {weatherData.weather[0].description}
      </Text>
      <Button
        title="View Details"
        onPress={() =>
          router.push({
            pathname: "/details",
            params: { weatherData: JSON.stringify(weatherData) },
          })
        }
      />
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
  city: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  temperature: {
    fontSize: 64,
    fontWeight: "bold",
  },
  description: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default HomeScreen;
