import React, { Component } from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  createTabNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import Home from "./Home";
import StoryView from "./StoryView";
import Drawer from "./Drawer";
import Favourite from "./Favourite";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export const StackNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Modern Js CheatSheet ",
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: "center"
      },
      headerLeft: <View />,
      headerRight: <View />
    })
  },
  StoryView: { screen: StoryView },
  initialRouteName: "Home"
});

export const TabNav = createTabNavigator(
  {
    Drawer: {
      screen: Drawer,
      navigationOptions: ({ navigation }) => ({
        title: "drawer",
        tabBarOnPress: ({ scene, jumpToIndex }) => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        },
        tabBarIcon: ({ focused, tintColor }) => {
          return <EvilIcons name="navicon" size={34} color="#000" />;
        }
      })
    },
    Tab2: {
      screen: StackNav,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          return <Entypo name="home" size={27} color="#000" />;
        }
      })
    },
    Tab3: {
      screen: Favourite,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          return <EvilIcons name="heart" size={34} color="#000" />;
        }
      })
    }
  },
  {
    swipeEnabled: false,
    tabBarPosition: "bottom",
    initialRouteName: "Tab2",
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "gray",
      pressColor: "black",
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "white"
      }
    }
  }
);

export const DrawerNav = createDrawerNavigator(
  {
    TabNav: { screen: TabNav },
    Drawer: { screen: Drawer }
  },
  {
    drawerWidth: 250
  }
);
