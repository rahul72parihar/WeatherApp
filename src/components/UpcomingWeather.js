import React from "react";
import { SafeAreaView, Text, View, StyleSheet, FlatList } from "react-native";

const UpcomingWeather = () => {
  const Item = (props) => {
    return <></>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={data} renderItem={render} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UpcomingWeather;
