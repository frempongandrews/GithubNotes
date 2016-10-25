import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    NavigatorIOS
} from 'react-native';

var Main = require('./Components/Main');


class githubNotes extends Component {

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'GithubNotes',
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
    },
    list: {},
    item: {
        color: "red",
        backgroundColor: "black",
        padding: 10,
        borderColor: "green",
        borderWidth: 1
    }
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotes);
