import React, { useState } from "react";
import { StyleSheet, Button, TextInput, Text, View } from "react-native";

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");

  const changeHandle = (val) => {
    setText(val);

  };

  return (
    <View>
      <TextInput style={styles.input} placeholder="add todo..." onChangeText={changeHandle} />
      <Button onPress={() => handleSubmit(text)} title="add todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
 
});
