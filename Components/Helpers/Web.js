import React, {Component} from "react";
import {View, WebView, StyleSheet} from "react-native";

class Web extends Component {
    render() {
        return(
            <View style={styles.container}>
                <WebView source={{url: this.props.url}} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6ef",
        flexDirection: "column"
    }
});


Web.propTypes = {

}

module.exports = Web;