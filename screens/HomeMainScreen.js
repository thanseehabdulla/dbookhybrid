import React from 'react';
import {ActivityIndicator, AsyncStorage, Button, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';
import a from './../assets/images/logo2.png'
export default class HomeMainScreen extends React.Component {

    static navigationOptions = {
        title: 'Menu',
        headerLeft: null,
    };

    onSignOut=()=>{
        // if(param === 'signout'){
        this.setState({loader:true})
        AsyncStorage.setItem('login', 'false');
            this.props.navigation.navigate('login');
        // }

    }
    onSales = ()=>{
        this.setState({loader:true})
        this.props.navigation.navigate('Sales');
        this.setState({loader:false})
    };
    onSalesList = ()=>{
        this.setState({loader:true})
        this.props.navigation.navigate('SalesList');
        this.setState({loader:false})
    };
    onPurchase=()=>{
        this.setState({loader:true})
        this.props.navigation.navigate('Purchase');
        this.setState({loader:false})
    };
    onPurchaseList=()=>{
        this.setState({loader:true})
        this.props.navigation.navigate('PurchaseList');
        this.setState({loader:false})
    };

    constructor(props) {
        super(props);

        this.state={
            name:'',
            loader:false
        }
        AsyncStorage.getItem('name').then((value)=>{

            this.setState({
                name : value
            })
        })

    }

    componentDidMount = ()=>{

    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style = {styles.imagebox}>
                <Image
                    style={{width: 150, height: 150}}
                    source={a}
                />
                    {this.state.loader && <ActivityIndicator size="large" color="#F47B22"/>}
                </View>

                <View style = {styles.minibox}>

                <Text numberOfLines={5} style={{margin:10,color:'#F47B22'}}>
                    Welcome, {this.state.name?this.state.name:'User'}
                </Text>

                <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onPurchaseList.bind(this)}

                    title="PURCHASE LIST"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                </View>
                    <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onPurchase.bind(this)}
                    style = {{paddingTop:10}}
                    title="ADD PURCHASE"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                    </View>
                    <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onSalesList.bind(this)}
                    style = {{paddingTop:10}}
                    title="SALES LIST"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                    </View>
                    <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onSales.bind(this)}
                    style = {{paddingTop:10}}
                    title="ADD SALES"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                    </View>
                    <View style = {{paddingTop:10}}>
                <Button
                    onPress={this.onSignOut.bind(this)}
                    style = {{paddingTop:10}}
                    title="SIGN OUT"
                    color="#F47B22"
                    accessibilityLabel="Learn more about this purple button"
                />
                    </View>
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
    imagebox:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    minibox:{
        width:300
    }

});
