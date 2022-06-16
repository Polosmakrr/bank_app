import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AccountName = ({ account }) => {
  return (
    <View style={styles.account}>
      <Text>Accounts Name ({account.currency.toUpperCase()})</Text>
      <View style={styles.accountBalance}>
        <FontAwesome name={account.currency} size={24} color="#000" />
        <Text style={styles.accountBalanceText}>
          {account.balance
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </View>
      <Text>Current balance</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  account: {
    marginTop: 46,
    marginHorizontal: 24,
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: "center",
    backgroundColor: "#F1F3F6",
    borderRadius: 16,
  },
  accountBalance: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  accountBalanceText: {
    fontFamily: "TitWebSemiBold",
    fontWeight: "600",
    fontSize: 35,
    paddingLeft: 4,
  },
});

export default AccountName;
