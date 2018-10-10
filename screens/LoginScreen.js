import React from 'react';
import {Button, StatusBar, StyleSheet, Text, TextInput, View, Alert, Image, AsyncStorage } from 'react-native';
import a from './../assets/images/logo2.png'
import * as api from './../api/api'

export default class LoginScreen extends React.Component {
    onPressLearnMore=()=>{
        fetch(api.LOGIN_API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        }) .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status === 'success') {
                            AsyncStorage.setItem('userid', responseJson.userid);
                    AsyncStorage.setItem('name', this.state.username);
                    AsyncStorage.setItem('login', 'true');
                            this.props.navigation.navigate('Home');

                } else {
                    Alert.alert(
                        'Login Failed',
                        JSON.stringify(responseJson),
                        [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )
                }
            })
            .catch((error) => {
                Alert.alert(
                    'Login Failed',
                    'Invalid Credential!! Please try Again',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            });
    }

    constructor(props) {
        super(props);
        this.state = { username: '',
        password :'',
        disabled:true};


    }

    componentDidMount  = () =>{
        AsyncStorage.getItem('login').then((value)=>{
            if(value === 'true')
            this.props.navigation.navigate('Home');
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Image
                    style={{width: 150, height: 150}}
                    source={a}
                />
                <Text numberOfLines={5} style={{margin:10,color:'#F47B22'}}>
                    Welcome, Please sign in to continue
                </Text>
                <View style = {styles.minibox}>
                <TextInput
                    style={{width: 300,height: 40, borderColor: 'gray', borderWidth: 0,marginBottom:10}}
                    onChangeText={(text) => this.setState({username:text,disabled:false})}
                    placeholder='username'
                    keyboardType='email-address'
                    value={this.state.username}
                />
                <TextInput
                    style={{width: 300,height: 40, borderColor: 'gray', borderWidth: 0,marginBottom:10}}
                    placeholder='password'
                    onChangeText={(text) => this.setState({password: text,disabled:false})}
                    value={this.state.password}
                    TYPE="visible-password"
                />
                <Button
                    onPress={this.onPressLearnMore}
                    style = {{paddingTop:20}}
                    title="SIGN IN"
                    disabled={this.state.disabled}
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
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

});