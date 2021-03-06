import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ActivityIndicator, TextInput} from 'react-native';
var Api = require("../utils/Api");
var Dashboard = require("./Dashboard");

class Main extends Component {
    constructor (props) {
        super(props);
        this.state= {
            username: "",
            isLoading: false,
            error: false
        }

    }

    handleChange (event) {
        this.setState ({
            username: event.nativeEvent.text
        });
    }

    handleSubmit () {
        this.setState({
           isLoading: true,
        });
        //console.log("SUBMIT" , this.state.username);
        // fetch data from github
        // reroute to next passing github info
        Api.getBio(this.state.username).then((res) => {
            if(res.name) {
                this.props.navigator.push({
                    title: res.name || "select option",
                    component: Dashboard,
                    passProps: {userInfo: res}
                });
                //console.log(res);

                this.setState({
                    isLoading: false,
                    error: false,
                    username: ""
                })
            } else {
                this.setState({
                    error: "User not found",
                    isLoading: false,
                });
            }

        })

    }

    render () {
        //console.log(this.state);
        return (
            <View style={styles.MainContainer} >
                <Text style={styles.title}>Search for a Github user</Text>
                <TextInput
                    style={styles.searchInput}
                    value={this.state.username}
                    onChange={this.handleChange.bind(this)}
                />
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="white">
                    <Text style={styles.buttonText} > SEARCH </Text>
                </TouchableHighlight>

                {/*show loading screen if isLoading*/}
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#111"
                    size="large">
                </ActivityIndicator>

                {/*show error if no user found*/}
                {(this.state.error)? <Text style={styles.notFound}> {this.state.error} </Text> : <View></View> }

            </View>

        )
    }
}


const styles = StyleSheet.create({
   MainContainer : {
       flex: 1,
       padding: 30,
       marginTop: 65,
       justifyContent: "center" ,
       backgroundColor: '#48BBEC',
   },
    title: {
       marginBottom: 20,
        fontSize: 25,
        textAlign: "center",
        color: '#fff'
    },

    button: {
        backgroundColor: "white",
        marginTop: 20,
        padding: 8,
        borderRadius:10
    },

    buttonText: {
        textAlign: "center",

    },

    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        color: "white"
    },

    notFound: {
        color: "red",
        fontSize: 15,
        marginTop: 30,
    }
});

module.exports = Main;