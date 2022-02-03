import {useState, useRef} from 'react';
import { Animated, View,  TextInput, StyleSheet, Text } from 'react-native'
import { formatPhoneNumber } from 'react-phone-number-input/input'
import { colors, fonts } from '../styles/styles';

function animatePlaceholder(inputValue, animation, reversed){
    if(inputValue.length > 0){
        return;
    }
    let value = 5;
    reversed ? value = 15 : null;
    Animated.timing(animation,{
        toValue: value,
        duration:150,
        useNativeDriver: false,
    }).start();
}

export const GetirDialCodeInput = (props) => {

    return(
        <View style={styles.inputContainer} onTouchStart={()=>props.navigation.navigate("CountrySelector")}>
            <Text style={styles.placeholderTextFocused} adjustsFontSizeToFit={true} numberOfLines={1}>Ülke/Bölge Kodu</Text>
            <TextInput style={styles.textInput} value={`(${props.dial_code}) ${props.flag}`} editable={false} adjustsFontSizeToFit={true} numberOfLines={1} />
        </View>
    );
}

export const GetirTextInput = (props) => {

    const [style, setStyle] = useState(styles.placeholderText);
    const [inputValue, setValue] = useState('');
    const holderAnim = useRef(new Animated.Value(16)).current
    const input = useRef(null);
    let keyboardType = props.keyboardType ? props.keyboardType : "default";

    return(
        <View style={styles.inputContainer} onTouchStart={()=>input.current.focus()}>
            <Animated.Text style={[styles.placeholderText, {top: holderAnim}]} adjustsFontSizeToFit={true} numberOfLines={1}>{props.placeholder}</Animated.Text>
            <TextInput ref={input} style={styles.textInput} keyboardType={keyboardType} onFocus={()=>animatePlaceholder(inputValue,holderAnim)} onBlur={()=>animatePlaceholder(inputValue,holderAnim,true)} adjustsFontSizeToFit={true} numberOfLines={1} onChangeText={setValue}/>
        </View>
    );
}




var styles = StyleSheet.create({
    inputContainer: {
        borderRadius:3,
        borderWidth:1.2,
        borderColor: colors.primary + "30",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:20,
        paddingBottom:2,
        justifyContent:"center",
    },
    placeholderText:{
        position:"absolute",
        left:15,
        fontSize:12,
        color: colors.gray,
        justifyContent:"center",
        alignContent:"center",
        fontFamily:fonts.bold,
    },
    placeholderTextFocused:{
        display:"flex",
        position:"absolute",
        width:"100%",
        top:5,
        left:15,
        color: colors.gray,
        justifyContent:"center",
        alignContent:"center",
        fontFamily:fonts.bold,
    },
    textInput:{
      color:"#333"
    }
});