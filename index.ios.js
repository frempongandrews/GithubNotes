
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
NavigatorIOS
} from 'react-native';

import Main from './Components/Main';

class githubNotetaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }


  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute = {{title: 'Github Notetaker',
                        component: Main
        }}
          />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111"
  }
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
