import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import Info from "../../../../img/svg/Information.svg";
import Exchange from "../../../../img/svg/Exchange.svg";
import Send from "../../../../img/svg/Send.svg";
import Statistic from "../../../../img/svg/Statistic.svg";

const QuickActions = ({ setToggleModal }) => {
  return (
    <View style={styles.quickActions}>
      <TouchableOpacity
        style={styles.quickActionsItem}
        activeOpacity={0.8}
        onPress={() => setToggleModal(true)}
      >
        <View
          style={{ ...styles.quickActionsIcon, backgroundColor: "#262F56" }}
        >
          <Info width={24} height={24} fill={"#FFAC30"} />
        </View>
        <Text style={styles.quickActionsText}>View details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quickActionsItem}
        activeOpacity={0.8}
        onPress={() => {
          Alert.alert("Ooops", "Here you will change money.", [
            {
              text: "Ok",
            },
          ]);
        }}
      >
        <View
          style={{ ...styles.quickActionsIcon, backgroundColor: "#EDF1F9" }}
        >
          <Exchange width={24} height={24} fill={"#0D1F3C"} />
        </View>
        <Text style={styles.quickActionsText}>Exchange</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quickActionsItem}
        activeOpacity={0.8}
        onPress={() => {
          Alert.alert("Ooops", "Here you will sending money.", [
            {
              text: "Ok",
            },
          ]);
        }}
      >
        <View
          style={{ ...styles.quickActionsIcon, backgroundColor: "#EDF1F9" }}
        >
          <Send width={24} height={24} fill={"#FFAC30"} />
        </View>
        <Text style={styles.quickActionsText}>Send Money</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quickActionsItem}
        activeOpacity={0.8}
        onPress={() => {
          Alert.alert("Ooops", "Here you will see statistic.", [
            {
              text: "Ok",
            },
          ]);
        }}
      >
        <View
          style={{ ...styles.quickActionsIcon, backgroundColor: "#EDF1F9" }}
        >
          <Statistic width={24} height={24} fill={"#0D1F3C"} />
        </View>
        <Text style={styles.quickActionsText}>Statistic</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quickActions: {
    paddingTop: 24,
    paddingBottom: 35,
    paddingLeft: 36,
    paddingRight: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  quickActionsIcon: {
    width: 49,
    height: 49,
    marginBottom: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  quickActionsItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  quickActionsText: {
    fontSize: 12,
    color: "#fff",
  },
});
export default QuickActions;
