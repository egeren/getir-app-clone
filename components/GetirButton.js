import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts} from '../styles/styles';

export const GetirButton = (props) =>{
    const [buttonStyle, setButtonStyle] = React.useState(styles.button);

    useEffect(()=>{
        !props.disabled ? setButtonStyle({...styles.button, backgroundColor: colors.lightPurple}) : null;
    },[props.disabled]);
    return(
            <TouchableOpacity style={buttonStyle} disabled={props.disabled} onPress={props.onPress}>
                <Text style={styles.text}>Üye Ol</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height:50,
        width:"100%",
        backgroundColor:colors.lightPurple + "85",
        height:50,
        borderRadius:8,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        textAlign:"center",
        color:"white",
        fontFamily:fonts.bold,
        fontSize:14,
    }

});