import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import * as api from "../api/api";

export default class DisplayPurchaseScreen extends React.Component {

    static navigationOptions = {
        title: 'PURCHASE LIST',
        // headerTintColor: '#fff',
        // headerStyle: {
        //     backgroundColor: '#F47B22'
        // }
    };

    componentDidMount = () => {
        AsyncStorage.getItem('userid').then((value) => {


            fetch(api.BASE_URL + '/api/purchasem/' + value).then((response) => response.json())
                .then((responseJson) => {
                    // Alert.alert(
                    //     'Login Failed',
                    //     JSON.stringify(responseJson),
                    //     [
                    //         {text: 'OK', onPress: () => console.log('OK Pressed')},
                    //     ],
                    //     {cancelable: false}
                    // )

                    this.setState({
                        data: responseJson.data,
                        loader: false
                    })

                })
                .catch((error) => {
                })
        })
    }

    constructor() {
        super();
    }

    state = {
        data: '',
        loader: true,
    }

    _onPressButton = (item) => {

        this.props.navigation.navigate('PurchaseDetail', {
            vendername: item.vendername,
            trn_no: item.trn_no,
            date_invoice: item.date_invoice,
            amount: item.amount,
            total: item.total,
            vat: item.vat,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                {this.state.loader && <ActivityIndicator size="large" color="#F47B22"/>}
                {this.state.data !== '' && <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                        <TouchableHighlight
                            style={{borderWidth: 1, marginTop: 5, padding: 10, backgroundColor: '#ffffff'}}>
                            <Text
                                onPress={this._onPressButton.bind(this, item)}>{item.date_invoice} - {item.vendername} -
                                AED {item.total} </Text>
                        </TouchableHighlight>
                    }
                />}


            </View>
        );
    }
}

const styles = StyleSheet.create({});
