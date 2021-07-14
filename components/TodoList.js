import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList({ item, handleDelete }) {
  return (
    <TouchableOpacity onPress={() => handleDelete(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="black" />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 15,
    flexDirection: "row",
    // backgroundColor: "whitesmoke",
  },
  text: {
    marginLeft: 20,
  },
});
