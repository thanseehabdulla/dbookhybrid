import React from 'react';
import {Button, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';
import a from './../assets/images/logo2.png'
export default class HomeMainScreen extends React.Component {

    static navigationOptions = {
        title: 'Menu',
        headerLeft: null,
    };

    onPressLearnMore=()=>{

    }

    constructor(){
        super();
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style = {styles.imagebox}>
                <Image
                    style={{width: 150, height: 150}}
                    source={a}
                />
                </View>

                <View style = {styles.minibox}>

                <Text numberOfLines={5} style={{margin:10,color:'#F47B22'}}>
                    Welcome, User
                </Text>

                <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onPressLearnMore}

                    title="PURCHASE LIST"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                </View>
                    <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onPressLearnMore}
                    style = {{paddingTop:10}}
                    title="ADD PURCHASE"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                    </View>
                    <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onPressLearnMore}
                    style = {{paddingTop:10}}
                    title="SALES LIST"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                    </View>
                    <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onPressLearnMore}
                    style = {{paddingTop:10}}
                    title="ADD SALES"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                    </View>
                    <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onPressLearnMore}
                    style = {{paddingTop:10}}
                    title="SIGN OUT"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagebox:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    minibox:{
        width:300
    }

});
