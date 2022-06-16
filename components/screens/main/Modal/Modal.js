import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Share from "../../../../img/svg/share.svg";
import Copy from "../../../../img/svg/copy.svg";

const ModalWindow = ({ toggleModal, closeModal, info }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={toggleModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.button} onPress={() => closeModal()}>
              <AntDesign name="close" size={30} color="#fff" />
            </Pressable>
            <View alignItems={"center"}>
              <Text style={styles.title}>{info.title}</Text>
              <View style={styles.balance}>
                <FontAwesome name={info.currency} size={18} color="#000" />
                <Text style={styles.balanceText}>
                  {info.balance
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
              </View>
              <View style={styles.currencyDescription}>
                <Text style={styles.currencyDescriptionText}>
                  {info.title.slice(0, -6)} details{" "}
                </Text>
                <Text style={styles.currencyDescriptionText}>
                  here you can find the account number, IBAN and also share and
                  send money
                </Text>
              </View>
              <Text style={{ ...styles.accountInfo, paddingBottom: 8 }}>
                Account number: 123456789 00
              </Text>
              <Text style={{ ...styles.accountInfo, paddingBottom: 30 }}>
                Sort code: 98-76-54
              </Text>
              <Text style={{ ...styles.accountInfo, paddingBottom: 80 }}>
                IBAN: GBP 00 12345 6789 100
              </Text>
              <View style={styles.action}>
                <TouchableOpacity
                  style={{
                    ...styles.actionItem,
                    borderRightWidth: 1,
                    borderRightColor: "#BCC5D3",
                  }}
                  activeOpacity={0.8}
                  onPress={() => {
                    Alert.alert("Ooops", "Copy to buffer.", [
                      {
                        text: "Ok",
                      },
                    ]);
                  }}
                >
                  <Copy width={22} height={22} fill={"#347AF0"} />
                  <Text style={styles.actionText}>Copy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionItem}
                  activeOpacity={0.8}
                  onPress={() => {
                    Alert.alert("Ooops", "Share with....", [
                      {
                        text: "Ok",
                      },
                    ]);
                  }}
                >
                  <Share width={22} height={22} fill={"#347AF0"} />
                  <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.closeAccount}
                activeOpacity={0.8}
                onPress={() => {
                  Alert.alert("Ooops", "Account will closed.", [
                    {
                      text: "Ok",
                    },
                  ]);
                }}
              >
                <Text style={styles.closeAccountText}>Close account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(13, 31, 60, 0.496995)",
  },
  modalView: {
    flex: 0.75,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    alignItems: "center",
  },
  button: {
    top: -25,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAC30",
  },
  title: {
    fontFamily: "TitWebSemiBold",
    fontWeight: "600",
    fontSize: 26,
  },
  balance: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  balanceText: {
    paddingLeft: 4,
    fontFamily: "TitWebRegular",
    fontWeight: "400",
    fontSize: 18,
  },
  currencyDescription: {
    paddingTop: 24,
    paddingBottom: 60,
    marginHorizontal: 24,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  currencyDescriptionText: {
    fontFamily: "TitWebRegular",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
  },
  accountInfo: {
    fontFamily: "TitWebRegular",
    fontWeight: "400",
    fontSize: 18,
  },
  action: { paddingBottom: 34, flexDirection: "row" },
  actionItem: { paddingHorizontal: 22, flexDirection: "row" },
  actionText: { paddingLeft: 8 },
  closeAccount: {
    width: 200,
    height: 46,
    borderWidth: 1,
    borderColor: "#B5BBC9",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  closeAccountText: {
    color: "#0D1F3C",
    fontFamily: "TitWebSemiBold",
    fontWeight: "600",
    fontSize: 19,
  },
});

export default ModalWindow;
