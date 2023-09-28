import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={styles.Item}>
      <Feather name="sun" size={50} color="black" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Item: {
    padding: 20,
    marginHorizontal: 8,
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});
export default ListItem;
