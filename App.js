import React from "react";
import ContextComponent from "./ContextComponent";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import {ThemeProvider} from "./ThemeContext";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
