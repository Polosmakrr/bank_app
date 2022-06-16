import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/main/Home/Home";
import Card from "./screens/main/Card";
import TopUp from "./screens/main/TopUp";
import Settings from "./screens/main/Setting";

import IconHome from "../img/svg/home.svg";
import Subtract from "../img/svg/Subtract.svg";
import MoneyBag from "../img/svg/moneyBag.svg";
import BarChart from "../img/svg/barChart.svg";

const MainTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          height: 80,
          shadowColor: "black",
          paddingBottom: 20,
          paddingTop: 10,
        },
      }}
    >
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.text,
                color: focused ? "#FFAC30" : "#000",
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused, size }) => (
            <IconHome size={size} stroke={focused ? "#FFAC30" : "#000"} />
          ),
        }}
        name="Accounts"
        component={Home}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.text,
                color: focused ? "#FFAC30" : "#000",
              }}
            >
              Card
            </Text>
          ),
          tabBarIcon: ({ focused, size }) => (
            <Subtract size={size} fill={focused ? "#FFAC30" : "#000"} />
          ),
        }}
        name="Card"
        component={Card}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.text,
                color: focused ? "#FFAC30" : "#000",
              }}
            >
              Top Up
            </Text>
          ),
          tabBarIcon: ({ focused, size }) => (
            <MoneyBag size={size} fill={focused ? "#FFAC30" : "#000"} />
          ),
        }}
        name="Top Up"
        component={TopUp}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.text,
                color: focused ? "#FFAC30" : "#000",
              }}
            >
              settings
            </Text>
          ),
          tabBarIcon: ({ focused, size }) => (
            <BarChart size={size} fill={focused ? "#FFAC30" : "#000"} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabNavigationOption: {},
  //   bottomNavigation: {
  //     flex: 1,
  //     justifyContent: "flex-end",
  //   },
  text: {
    fontFamily: "TitWebSemiBold",
    fontWeight: "600",
    fontSize: 12,
    // paddingBottom: 40,
  },
});

export default Routes;
