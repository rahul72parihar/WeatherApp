import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatheCondition = weather[0].main;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: weatherType[weatheCondition].backgroundColor }]}
    >
      <View style={styles.top}>
        <Feather name={weatherType[weatheCondition].icon} size={100} color="white" />

        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feels}>Feels Like {feels_like}</Text>
        <View style={styles.highLowContainer}>
          <Text style={styles.highLow}>High:{temp_max}</Text>
          <Text style={styles.highLow}>Low:{temp_min}</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>{weather[0].description}</Text>
        <Text style={styles.message}>{weatherType[weatheCondition].message}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 40,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  bodyWrapper: {
    paddingLeft: 25,
    marginBottom: 40,
    // backgroundColor: "black",
    // justifyContent: "flex-end",
    // alignItems: "flex-start",
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
