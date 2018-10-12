import React from 'react';
import {Alert, AsyncStorage, Button, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import DatePicker from 'react-native-datepicker'
import * as api from "../api/api";


export default class AddSalesScreen extends React.Component {


    static navigationOptions = {
        title: 'SALES',

    };

    onPressLearnMore = () => {
        this.setState({
            loader:true
        })

        var bodyParam = JSON.stringify({
            date: (this.state.date).toString(),
            net_sales: parseFloat(this.state.net_sales),
            tax: parseFloat(this.state.tax),
            net_total: parseFloat(this.state.net_total),
            userid: parseInt(this.state.userid),
        })

        console.log(bodyParam)

        fetch(api.SALES_API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: bodyParam,
        }).then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status === 'success') {
                    console.log('success added')
                    this.props.navigation.navigate('HomeMain');

                } else {
                    console.log(responseJson)
                    this.setState({loader:false})
                    Alert.alert(
                        'Please try Again',
                        responseJson,
                        [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )
                }
            })
            .catch((error) => {
                this.setState({loader:false})
                Alert.alert(
                    'Failed',
                    'Please try Again',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false}
                )
            });

    }

    constructor() {
        super();
        let d = new Date()
        this.state = {
            data: '',
            loader: true,
            tax: '0',
            net_total: '0',
            date: ((d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear()),
            net_sales:'0',
            userid:''
        }

        AsyncStorage.getItem('userid').then((value)=>{

            this.setState({
                userid : value
            })
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>

                <View style={{flexDirection: 'column', height: 440, padding: 20}}>


                    <Text>DATE : </Text>
                    <DatePicker
                        style={{ backgroundColor: '#fff',
                            height: 40,
                            paddingLeft: 10,
                            paddingTop: 0,
                            width:350,
                            paddingBottom: 0,
                            borderColor: '#F47B22',
                            borderWidth: 1,
                            borderRadius: 10,}}
                        date={new Date()}
                        mode="date"
                        placeholder="select date"
                        format="MM/DD/YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                width:350,
                                borderWidth:0
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />

                    <Text>NET SALES :</Text>
                    <TextInput value={this.state.net_sales} onChangeText={(text) => {
                        let net_total = (parseFloat(text)+ parseFloat(this.state.tax)).toFixed(2).toString()
                        this.setState({net_sales:text,net_total:net_total})
                    }}
                        underlineColorAndroid='transparent' style={{
                        backgroundColor: '#fff',
                        height: 40,
                        paddingLeft: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderColor: '#F47B22',
                        borderWidth: 1,
                        borderRadius: 10,
                    }}/>

                    <Text>TAX : </Text>
                    <TextInput value={this.state.tax} onChangeText={(text) => {
                        let net_total = (parseFloat(text)+ parseFloat(this.state.net_sales)).toFixed(2).toString()
                        this.setState({tax:text,net_total:net_total})
                    }}
                        underlineColorAndroid='transparent' style={{
                        backgroundColor: '#fff',
                        height: 40,
                        paddingLeft: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderColor: '#F47B22',
                        borderWidth: 1,
                        borderRadius: 10,
                    }}/>

                    <Text>NET TOTAL : </Text>
                    <TextInput editable={false} value={this.state.net_total} underlineColorAndroid='transparent' style={{
                        backgroundColor: '#fff',
                        height: 40,
                        paddingLeft: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderColor: '#F47B22',
                        borderWidth: 1,
                        borderRadius: 10,
                    }}/>

                    <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                        <View style={{width: 100, height: 40}}/>
                        <View style={{width: 240, height: 40}}>
                            <Button
                                onPress={this.onPressLearnMore}
                                title="SAVE"
                                color="#F47B22"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>

                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
