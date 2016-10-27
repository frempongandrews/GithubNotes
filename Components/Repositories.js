import React, {Component} from 'react';
var Badge = require("./Badge");
var Separator = require("./Helpers/Separator");
import {View, Text, StyleSheet, ScrollView, TouchableHighlight} from "react-native";
var Web = require("./Helpers/Web");

class Repositories extends Component {

    openPage(url) {

        //view a webpage when a repo is clicked
        console.log("The url is: " + url);
        this.props.navigator.push({
            component: Web,
            title: "Web View",
            passProps: {url}
        })
    }

    render () {
        var repos = this.props.repos;
        var list = repos.map((item, index) => {
            var desc = repos[index].description ? <Text style={styles.description}></Text> : <View></View>;
            return (
                <View key={index} style={styles.container}>

                    <View style={styles.rowContainer}>
                        <TouchableHighlight onPress={this.openPage.bind(this, repos[index].html_url)} underlayColor="transparent">
                        <Text style={styles.name}> {repos[index].name} </Text>
                       </TouchableHighlight>
                        <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
                        {desc}
                    </View>
                    <Separator/>
                </View>
            )
        })

        return (
                <ScrollView>
                    <Badge userInfo={this.props.userInfo} />
                    {list}
                </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rowContainer: {
      flexDirection: "column",
        flex: 1,
        padding: 10
    },
    name: {
        color: "#72bcd4",
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: "#72bcd4",
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

Repositories.propTypes = {
    userInfo: React.PropTypes.object.isRequired,
    repos: React.PropTypes.array.isRequired
};

module.exports = Repositories;