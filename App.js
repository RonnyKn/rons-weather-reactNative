import React from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={80} color="white" />
        <Text style={styles.h1}>Current Weather</Text>
        <Text style={styles.temperature}>36</Text>
        <View style={styles.hiandlow}>
          <Text style={styles.Text}>Hi: 40</Text>
          <Text style={styles.Text}>Low: 30</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.desc}>Its Sunny</Text>
        <Text style={styles.message}>Its Perfect tshirt Weather</Text>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "blue",
    flex: 1,
    padding: 10,
  },
  container: {
    alignItems: "center",
    paddingTop: 40,
    flex: 1,
  },
  Text: {
    color: "#fff",
    fontSize: 30,
  },
  h1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
  },
  temperature: {
    color: "#fff",
    fontSize: 30,
  },
  hiandlow: {
    flexDirection: "row",
    color: "#fff",
    gap: 5,
  },
  bodyWrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  desc: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
  },
  message: {
    fontSize: 25,
    color: "#fff",
  },
})
