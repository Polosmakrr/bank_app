import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import Search from "../../../../img/svg/Search.svg";
import User from "../../../../img/svg/User.svg";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View
        style={styles.headerMenu}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            Alert.alert("Ooops", "Here will be User.", [
              {
                text: "Ok",
              },
            ]);
          }}
        >
          <User width={24} height={24} stroke={"#fff"} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            Alert.alert("Ooops", "Here you will search.", [
              {
                text: "Ok",
              },
            ]);
          }}
        >
          <Search width={24} height={24} stroke={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  headerMenu: {
    flexDirection: "row",
  },
  headerTitle: {
    fontFamily: "TitWebSemiBold",
    fontWeight: "600",
    fontSize: 26,
    color: "#fff",
  },
});

export default Header;
