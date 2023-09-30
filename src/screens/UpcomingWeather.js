import React from "react";
import { SafeAreaView, StyleSheet, FlatList, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require("../../assets/tree.jpg")}>
        <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item) => item.dt} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#121212",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
