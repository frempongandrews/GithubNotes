import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";

class Badge extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
                <Text style={styles.name}>{this.props.userInfo.name}</Text>
                <Text style={styles.handle}> {this.props.userInfo.login} </Text>
            </View>
        )
    }
}

Badge.propTypes = {
    userInfo: React.PropTypes.object.isRequired
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: "#48BBEC",
        paddingBottom: 10
    },
    name: {
        alignSelf: "center",
        fontSize: 21,
        marginTop: 10,
        marginBottom: 5,
        color: "white"
    },
    handle: {
        fontSize: 16,
        color: "white",
        alignSelf: "center",
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 65,
        marginTop: 10,
        alignSelf: "center"
    }
});

module.exports = Badge;