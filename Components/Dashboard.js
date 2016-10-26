import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';
var Profile = require("./Profile");
var Repositories = require("./Repositories");
var Api = require("../utils/Api");

class Dashboard extends Component {
    makeBackground(btn) {
        var obj = {
            // flexDirection: "row",
            // alignSelf: "stretch",
            flexDirection: "row",
            justifyContent: "center",
            flex: 1
        }

        if ( btn === 0 ) {
           obj.backgroundColor = "#48BBEC";
        }

        if ( btn === 1 ) {
            obj.backgroundColor = "#E77AAE";
        }

        if ( btn === 2 ) {
            obj.backgroundColor = "#758BF4";
        }

        return obj;
    }

    goToProfile () {
        console.log("going to Profile");
        this.props.navigator.push({
            component: Profile,
            passProps: {userInfo: this.props.userInfo}
        });
    }

    goToRepos() {
        // console.log("going to repos");
        // console.log(this.props.userInfo.login);
        Api.getRepos(this.props.userInfo.login).then((res) => {
            console.log(res);
                this.props.navigator.push({
                    title: "Repos",
                    component: Repositories,
                    passProps: {
                        userInfo: this.props.userInfo,
                        repos: res
                    }
                });

        });



    }

    goToNotes() {
        console.log("Going to Notes");
    }

    render () {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={{height: 350}}/>
                <TouchableHighlight onPress={this.goToProfile.bind(this)} underlayColor="#88D4F5" style={this.makeBackground(0)}>
                    <Text style={styles.buttonText}> View Profile</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.goToRepos.bind(this)} underlayColor="#88D4F5" style={this.makeBackground(1)}>
                    <Text style={styles.buttonText}> View Repos</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.goToNotes.bind(this)} underlayColor="#88D4F5" style={this.makeBackground(2)}>
                    <Text style={styles.buttonText}> View Notes</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },

    image: {
        height: 350,
    },
    buttonText: {
        fontSize: 24,
        color: "white",
        alignSelf: "center"
    }
});

module.exports = Dashboard;