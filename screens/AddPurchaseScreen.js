import React from 'react';
import {Button, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';

export default class AddPurchaseScreen extends React.Component {

    static navigationOptions = {
        title: 'PURCHASE',

    };

    onPressLearnMore = ()=>{

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style={{flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
                    <Text style={{flex: 0,width: 100, height: 50}}>Expiration date</Text>
                    <TextInput style={{flex: 1,width: 100, height: 50}} />
                </View>

                    <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>Expiration date</Text>
                        <TextInput style={{flex: 1,width: 100, height: 50}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>Expiration date</Text>
                        <TextInput style={{flex: 1,width: 100, height: 50}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>Expiration date</Text>
                        <TextInput style={{flex: 1,width: 100, height: 50}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>Expiration date</Text>
                        <TextInput style={{flex: 1,width: 100, height: 50}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>Expiration date</Text>
                        <TextInput style={{flex: 1,width: 100, height: 50}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
                        <Text style={{flex: 0,width: 100, height: 50}}>Expiration date</Text>
                        <TextInput style={{flex: 1,width: 100, height: 50}} />
                    </View>

                <View style={{flex: 1, flexDirection: 'row',paddingTop:10}}>
                    <View style={{width: 100, height: 50}}/>
                    <View style={{width: 250, height: 50}} >
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