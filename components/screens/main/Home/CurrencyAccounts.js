import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CurrencyAccounts = ({ accounts, choseAccount }) => {
  return (
    <ScrollView style={styles.accountsList}>
      <Text style={styles.title}>All currency accounts</Text>
      {accounts.map((item, index) => (
        <TouchableOpacity
          style={styles.accountsItem}
          key={index}
          activeOpacity={0.8}
          onPress={() => choseAccount(index)}
        >
          <View flexDirection={"row"}>
            <View style={styles.currencyIcon}>
              <FontAwesome name={item.currency} size={24} color="#fff" />
            </View>
            <View style={styles.accountsTitle}>
              <Text style={styles.accountsTitleCurrency}>{item.title}</Text>
              <Text style={styles.accountsTitleText}>Account details</Text>
            </View>
          </View>
          <View style={styles.accountsBalance}>
            <FontAwesome name={item.currency} size={12} color="#000" />
            <Text style={styles.accountsBalanceText}>
              {item.balance
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "TitWebRegular",
    fontWeight: "400",
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 8,
    paddingBottom: 20,
  },
  accountsList: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  accountsItem: {
    marginBottom: 16,
    padding: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#EDF1F9",
    borderRadius: 30,
    width: "100%",
  },
  accountsTitle: {},
  accountsBalance: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  accountsBalanceText: {
    fontFamily: "TitWebSemiBold",
    fontWeight: "600",
    fontSize: 15,
    paddingLeft: 4,
  },
  accountsTitleCurrency: {
    fontFamily: "TitWebSemiBold",
    fontWeight: "600",
    fontSize: 15,
  },
  accountsTitleText: {
    fontFamily: "TitWebRegular",
    fontWeight: "400",
    fontSize: 15,
    color: "#485068",
  },
  currencyIcon: {
    marginRight: 13,
    width: 34,
    height: 34,
    backgroundColor: "#FFAC30",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});

export default CurrencyAccounts;
