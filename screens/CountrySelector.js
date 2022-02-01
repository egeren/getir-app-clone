import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {countries} from '../data/countries';
import { colors } from './../styles/colors';

function CountrySelector({navigation}) {

    const CountryItem = ({item}) => {
        return (
            <TouchableOpacity>
                <View style={styles.countryContainer} onTouchEnd={()=>navigation.navigate('SignUp',{flag: item.flag, dial_code: item.dial_code})}>
                    <Text>{item.name} {item.flag} ({item.dial_code})</Text>
                </View>
            </TouchableOpacity>
        )
    };
    return (
        <View style={styles.container}>
            <FlatList data={countries} renderItem={CountryItem} keyExtractor={item => item.code}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    countryContainer:{
        padding:20,
        borderColor:colors.gray + "44",
        borderTopWidth:.5,
        borderBottomWidth:.5,
    }
});

export default CountrySelector;