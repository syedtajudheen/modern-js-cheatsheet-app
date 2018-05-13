import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { DrawerNav } from "./src/container/navigator";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <DrawerNav />;
  }
}
