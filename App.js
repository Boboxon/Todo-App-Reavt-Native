import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  const [list, setList] = useState([
    { text: "1 hour break", key: "1" },
    { text: "buy a milk", key: "2" },
    { text: "find a job", key: "3" },
  ]);

  const handleDelete = (key) => {
    setList((todos) => {
      return todos.filter((todo) => todo.key != key);
    });
  };

  const handleSubmit = (text) => {
    if (text.length > 3) {
      setList((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos nust be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <AddTodo handleSubmit={handleSubmit} />
        {/* List */}
        <View style={styles.listView}>
          <FlatList data={list} renderItem={({ item }) => <TodoList handleDelete={handleDelete} item={item} />} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listView: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: "red",
  },
});
