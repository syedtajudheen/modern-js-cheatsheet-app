import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import HTML from "react-native-render-html";

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altListColor: false
    };
  }

  renderItem = (item, index) => {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate("StoryView", { item })}
      >
        <View
          style={[
            styles.view,
            { backgroundColor: index % 2 == 0 ? "white" : "#F3F3F3" }
          ]}
        >
          <Text style={styles.titletext}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.listdata[0].deeperlink.deeperlink}
        renderItem={({ item, index }) => this.renderItem(item, index)}
        keyExtractor={(item, index) => item.title}
      />
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 10
  },
  titletext: {
    fontSize: 16
  }
});
