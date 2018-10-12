import React from 'react';
import {
    ActivityIndicator,
    Alert,
    AsyncStorage,
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import * as api from "../api/api";

export default class DisplaySalesScreen extends React.Component {

    static navigationOptions = {
        title: 'SALES LIST',
    };

    componentDidMount = ()=>{

        AsyncStorage.getItem('userid').then((value) => {
            console.log('value',value)
        fetch(api.BASE_URL+'/api/salesm/'+value) .then((response) => response.json())
            .then((responseJson) => {

                // Alert.alert(
                //     'Login Failed',
                //     JSON.stringify(responseJson),
                //     [
                //         {text: 'OK', onPress: () => console.log('OK Pressed')},
                //     ],
                //     { cancelable: false }
                // )
                this.setState({
                    data:responseJson.data,
                    loader:false
                })

            })
            .catch((error) => {})
        })
    }

    constructor() {
        super();

    }

    state={
        data:'',
        loader:true,

    }

    _onPressButton =(item)=>{
        this.props.navigation.navigate('SalesDetail' ,{
            date: item.date,
                tax: item.tax,
                net_sales: item.net_sales,
                net_total:item.net_total,
        });

    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                {this.state.loader && <ActivityIndicator size="large" color="#F47B22"/>}
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                        <TouchableHighlight  style={{borderWidth:1,marginTop:5,padding:10,backgroundColor:'#ffffff'}}>
                            <Text onPress={this._onPressButton.bind(this,item)}>{item.date} - AED {item.net_total}</Text>
                        </TouchableHighlight >
                    }
                />


            </View>
        );
    }
}

const styles = StyleSheet.create({});
