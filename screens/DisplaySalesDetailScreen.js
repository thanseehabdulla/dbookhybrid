import React from 'react';
import {Button, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';

export default class DisplaySalesDetailScreen extends React.Component {

    static navigationOptions = {
        title: 'SALES DETAIL',


    };


    render() {
        const { navigation } = this.props;
        const date = navigation.getParam('date', '');
        const tax = navigation.getParam('tax', '');
        const net_sales = navigation.getParam('net_sales', '');
        const net_total = navigation.getParam('net_total', '');

        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style={{flexDirection: 'column',padding:10,height:200}}>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}> DATE : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(date).replace(/["]/g, "")}</Text>
                    </View>

                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>TAX : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(tax).replace(/["]/g, "")}</Text>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>NET SALES : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(net_sales).replace(/["]/g, "")}</Text>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>NET TOTAL : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(net_total).replace(/["]/g, "")}</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: 100, height: 50}}/>
                        <View style={{width: 250, height: 50}} >

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
