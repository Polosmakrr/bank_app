import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "../Header/Header";
import AccountName from "./AccountName";
import QuickActions from "./QuickActions";
import CurrencyAccounts from "./CurrencyAccounts";
import { getData } from "../../../fetch";
import ModalWindow from "../Modal/Modal";

const Home = () => {
  const [data, setData] = useState();
  const [account, setAccount] = useState();
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    getData(setData);
  }, []);

  useEffect(() => {
    if (data) {
      setAccount(data.body.accounts[0]);
    }
  }, [data]);

  const choseAccount = (index) => {
    setAccount(data.body.accounts[index]);
  };

  const closeModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <View style={styles.container}>
      <Header title={"Accounts"} />
      {account && <AccountName account={account} />}
      <QuickActions setToggleModal={setToggleModal} toggleModal={toggleModal} />
      {data && (
        <CurrencyAccounts
          accounts={data.body.accounts}
          choseAccount={choseAccount}
        />
      )}
      <StatusBar style="auto" />
      <View>
        {account && (
          <ModalWindow
            toggleModal={toggleModal}
            closeModal={closeModal}
            info={account}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1F3C",
  },
});

export default Home;
