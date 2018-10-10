import React from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';

export default class DisplaySalesScreen extends React.Component {

    static navigationOptions = {
        title: 'SALES LIST',
    };


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
