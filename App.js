import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (loading)
    return (
      <View style={styles.container}>
        <Text>
          <ActivityIndicator size={"large"} color={"blue"} />;
        </Text>
      </View>
    );
  if (error) return <View></View>;
  if (weather && weather.list)
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
