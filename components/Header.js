import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo Lisst</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "coral",
    paddingTop: 35,
  },
  header: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
