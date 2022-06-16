import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./Header/Header";

const TopUp = () => {
  return (
    <View style={styles.container}>
      <Header title={"Top Up"} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1F3C",
  },
});

export default TopUp;
