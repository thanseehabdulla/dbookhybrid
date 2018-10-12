import React from 'react';
import {Alert, AsyncStorage, Button, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import SearchableDropDown from "react-native-searchable-dropdown";
import DatePicker from "react-native-datepicker";
import * as api from "../api/api";


var items = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'Java'
    },
    {
        id: 3,
        name: 'Ruby'
    },
    {
        id: 4,
        name: 'React Native'
    },
    {
        id: 5,
        name: 'PHP'
    },
    {
        id: 6,
        name: 'Python'
    },
    {
        id: 7,
        name: 'Go'
    },
    {
        id: 8,
        name: 'Swift'
    },
];

export default class AddPurchaseScreen extends React.Component {


    static navigationOptions = {
        title: 'PURCHASE',

    };

    componentDidMount = () => {


        fetch(api.BASE_URL + '/api/vender').then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)

                this.setState({
                    data: responseJson.data,
                    loader: false
                })

            })
            .catch((error) => {
            })
    }

    onPressLearnMore = () => {
        this.setState({
            loader:true
        })

        var bodyParam = JSON.stringify({
            vendername: (this.state.vendername).toString(),
            trn_no: (this.state.trn_no).toString(),
            date_invoice: (this.state.dateinvoice).toString(),
            amount: parseFloat(this.state.amount),
            vat: parseFloat(this.state.vat),
            total: parseFloat(this.state.total),
            invoice_number: (this.state.invoicenumber).toString(),
            userid: parseInt(this.state.userid),
        })

        console.log(bodyParam)

        fetch(api.PURCHASE_API, {
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
            trn_no: '',
            vendername: '',
            dateinvoice: ((d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear()),
            invoicenumber:'',
            amount:'0',
            vat:'0',
            total:'0',
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
                    <Text>VENDER NAME : </Text>
                    <SearchableDropDown
                        onTextChange={(text) => console.log(text)}
                        onItemSelect={(item) => this.setState({trn_no: item.trn_no, vendername: item.name})}
                        containerStyle={{
                            padding: 0,

                        }}
                        textInputStyle={{
                            backgroundColor: '#fff',
                            padding: 12,
                            height: 40,
                            borderWidth: 1,
                            borderColor: '#F47B22',
                            borderRadius: 10
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#ddd',
                            borderColor: '#bbb',
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        itemTextStyle={{
                            color: '#222'
                        }}
                        itemsContainerStyle={{
                            maxHeight: 140
                        }}
                        items={this.state.data}
                        defaultIndex={2}
                        placeholder="Vendername"
                        resetValue={false}
                        underlineColorAndroid='transparent'/>

                    <Text>INVOICE NUMBER : </Text>
                    <TextInput onChangeText={(text) => this.setState({invoicenumber:text})} underlineColorAndroid='transparent'
                               style={{
                                   backgroundColor: '#fff',
                                   height: 40,
                                   paddingLeft: 10,
                                   paddingTop: 0,
                                   paddingBottom: 0,
                                   borderColor: '#F47B22',
                                   borderWidth: 1,
                                   borderRadius: 10,
                               }}/>

                    <Text>TRN NO :</Text>
                    <TextInput editable={false} underlineColorAndroid='transparent' style={{
                        backgroundColor: '#fff',
                        height: 40,
                        paddingLeft: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderColor: '#F47B22',
                        borderWidth: 1,
                        borderRadius: 10,
                    }} value={this.state.trn_no}/>

                    <Text>DATE INVOICE : </Text>
                    <DatePicker
                        style={{
                            backgroundColor: '#fff',
                            height: 40,
                            paddingLeft: 10,
                            paddingTop: 0,
                            width: 350,
                            paddingBottom: 0,
                            borderColor: '#F47B22',
                            borderWidth: 1,
                            borderRadius: 10,
                        }}
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
                                width: 350,
                                borderWidth: 0
                            }
                        }}
                        onDateChange={(date) => {
                            console.log(date)
                            this.setState({dateinvoice: date})
                        }}
                    />

                    <Text>AMOUNT : </Text>
                    <TextInput keyboardType='numeric' value={this.state.amount} onChangeText={(text) => {
                        let total = (parseFloat(text)+ parseFloat(this.state.vat)).toFixed(2).toString()
                        this.setState({amount:text,total:total})
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

                    <Text>VAT : </Text>
                    <TextInput keyboardType='numeric' value={this.state.vat} onChangeText={(text) => {
                        let total = (parseFloat(text)+ parseFloat(this.state.amount)).toFixed(2).toString()
                        this.setState({vat:text,total:total})
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

                    <Text>TOTAL : </Text>
                    <TextInput editable={false} value={this.state.total} underlineColorAndroid='transparent' style={{
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
