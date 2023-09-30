import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";
import moment from "moment";
const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={styles.Item}>
      <Feather name={weatherType[condition].icon} size={50} color="black" />
      <View style={styles.dataTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={styles.date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(max)}° / ${Math.round(min)}°`}</Text>
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
