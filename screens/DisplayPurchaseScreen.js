import React from 'react';
import {Alert, AsyncStorage, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import * as api from "../api/api";

export default class DisplayPurchaseScreen extends React.Component {

    static navigationOptions = {
        title: 'PURCHASE LIST',
    };

    componentDidMount = ()=>{


        fetch(api.BASE_URL+'/api/purchase/1') .then((response) => response.json())
            .then((responseJson) => {


                    Alert.alert(
                        'Login Success',
                        JSON.stringify(responseJson),
                        [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )

            })
            .catch((error) => {})
    }

    constructor(){
        super();

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}]}
                    renderItem={({item}) =>
                        <View style={{borderWidth:1,marginTop:5,padding:10,backgroundColor:'#ffffff'}}>
                        <Text>{item.key}</Text>
                        </View>
                            }
                />


            </View>
        );
    }
}

const styles = StyleSheet.create({});
