import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreens from "./screens/CategoryScreens";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoryScreens />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
