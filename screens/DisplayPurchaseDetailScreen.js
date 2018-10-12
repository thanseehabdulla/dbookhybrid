import React from 'react';
import {Alert, Button, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';

export default class DisplayPurchaseDetailScreen extends React.Component {

    static navigationOptions = {
        title: 'PURCHASE DETAIL',

    };



    render() {

        const { navigation } = this.props;
        const vendername = navigation.getParam('vendername', '');
        const trn_no = navigation.getParam('trn_no', '');
        const date_invoice = navigation.getParam('date_invoice', '');
        const amount = navigation.getParam('amount', '');
        const total = navigation.getParam('total', '');
        const vat = navigation.getParam('vat', '');

        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style={{flexDirection: 'column',paddingTop:10,height:200}}>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 1,width: 100, height: 50}}>VENDER NAME : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(vendername).replace(/["]/g, "")}</Text>
                    </View>

                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>TRN NO : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(trn_no).replace(/["]/g, "")}</Text>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>INVOICE DATE : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(date_invoice).replace(/["]/g, "")}</Text>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>VAT : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(vat).replace(/["]/g, "")}</Text>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>AMOUNT : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(amount).replace(/["]/g, "")}</Text>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>TOTAL : </Text>
                        <Text style={{flex: 2,width: 100, height: 50}}>{JSON.stringify(total).replace(/["]/g, "")}</Text>
                    </View>


                    <View style={{flex: 3, flexDirection: 'row'}}>
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