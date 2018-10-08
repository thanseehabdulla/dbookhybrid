import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'dBytes',
    };
    render() {


        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Text>Welcome to link screen</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
