import React, {Component} from "react";
import {View, Text, ListView, TextInput, StyleSheet, TouchableHighlight} from "react-native";
var Api = require("../utils/Api");
var Separator = require("./Helpers/Separator");
var Badge = require("./Badge");

class Notes extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: this.ds.cloneWithRows([this.props.notes]),
            note: "",
            error: ""
        }
    }

    handleChange(e){
        this.setState({
            note: e.nativeEvent.text
        });
    }

    handleSubmit(){
        // data to firebase
        var note = this.state.note;
        this.setState({
            note: ""
        });

        Api.addNote(this.props.userInfo.login, note).then((data) => {
            Api.getNotes(this.props.userInfo.login).then((data) => {
                this.setState({
                    dataSource: this.ds.cloneWithRows(data)
                })
            })
        }).catch((err) => {
            console.log("Request failed", err);
            this.setState({
                err
            })
        })
    }

    renderRow(rowData) {
        return (
            <View>
                <View style={styles.rowContainer}>
                    <Text>{rowData}</Text>
                </View>

                <Separator/>
            </View>
        )
    }

    footer(){
        return(
            <View style={styles.footerContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={this.state.note}
                    onChange={this.handleChange.bind(this)}
                    placeholder="New Note"
                />

                <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#88d4f5">
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>

                </TouchableHighlight>
            </View>
        )
    }

    render () {

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    render={this.renderRow}
                    rendeHeader = {() => <Badge userInfo={this.props.userInfo} />}
                />

                {this.footer()}
            </View>
            )

    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    buttonText: {
        fontSize: 18,
        color: "white"
    },
    button: {
        height: 60,
        backgroundColor: "#48bbec",
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: "#111",
        flex: 10
    },
    rowContainer: {
        padding: 10,
    },
    footerContainer: {
        backgroundColor: "#e3e3e3",
        alignItems: "center",
        flexDirection: "row"
    }
});

Notes.propTypes = {
    userInfo: React.PropTypes.object.isRequired,
    notes: React.PropTypes.object.isRequired
}

module.exports = Notes;