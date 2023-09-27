import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Feather name="sun" size={100} color="black" />

        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <View style={styles.highLowContainer}>
          <Text style={styles.highLow}>High:8</Text>
          <Text style={styles.highLow}>Low:6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's Perfect Weather</Text>
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
