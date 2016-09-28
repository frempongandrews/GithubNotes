import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ActivityIndicatorIOS, TextInput} from 'react-native';

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
        //update indicatorIOS
        this.setState({
           isLoading: true,
        });
        console.log("SUBMIT" , this.state.username);
        //fetch data from github
        //reroute to next passing github info
    }

    render () {
        console.log(this.state.username);
        return (
            <View style={styles.MainContainer} >
                <Text style={styles.title}>Search for a Github user</Text>
                <TextInput
                    style={styles.searchInput}
                    value={this.state.username}
                    onChange={this.handleChange.bind(this)}
                />
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="white">
                    <Text style={styles.btonText} > SEARCH </Text>
                </TouchableHighlight>
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

    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        color: "white"
    }
});

export default Main;