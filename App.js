import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from "expo-location";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setError("permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});

    if (location) console.log(location);
    setLocation(location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (loading)
    return (
      <View style={styles.container}>
        <Text>
          <ActivityIndicator size={"large"} color={"blue"} />;
        </Text>
      </View>
    );
  return (
    <NavigationContainer>
      <Tabs />
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
