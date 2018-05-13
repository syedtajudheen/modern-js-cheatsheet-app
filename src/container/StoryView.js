import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import HTML from "react-native-render-html";

export default class StoryView extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.title
  });

  render() {
    return (
      <ScrollView>
        <View style={{flex:1,padding:10, backgroundColor:'#fff'}}>
          <HTML
            html={this.props.navigation.state.params.item.body}
            imagesMaxWidth={Dimensions.get("window").width}
          />
        </View>
      </ScrollView>
    );
  }
}
