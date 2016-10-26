import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

class Separator extends Component {
    render() {
        return (
            <View style={styles.separator} />


        )
    }
}

var styles = StyleSheet.create({
    separator: {
        backgroundColor: "#e4e4e4",
        height: 1,
        marginLeft: 15,
        flex: 1
    }
});

module.exports = Separator;