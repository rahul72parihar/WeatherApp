import { SafeAreaView, StyleSheet, Text, ImageBackground, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require("../../assets/CityBackground.jpeg")}>
        <Text style={[styles.cityText, styles.city]}>London</Text>
        <Text style={[styles.cityText, styles.country]}>UK</Text>
        <View style={styles.populationWrapper}>
          <Feather name="user" size={50} color={"red"} />
          <Text style={styles.populationText}>8000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={50} color={"white"} />
          <Text style={styles.riseSetText}>10:23:23 AM</Text>
          <Feather name="sunset" size={50} color={"white"} />
          <Text style={styles.riseSetText}>32:23:23 PM</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  country: { fontSize: 30 },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    color: "red",
    fontWeight: "bold",
    marginRight: 7.5,
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
