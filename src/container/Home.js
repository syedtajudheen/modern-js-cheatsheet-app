import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions, FlatList } from "react-native";
import HomeContent from "../component/HomeContent";
import data from "../datas/data.json";

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <HomeContent listdata={data} navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}
