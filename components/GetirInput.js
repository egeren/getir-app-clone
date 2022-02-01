import { Animated, View,  TextInput, StyleSheet, Text } from 'react-native'
import {formatPhoneNumber } from 'react-phone-number-input/input'
import { colors } from '../styles/colors';
import {useState, useRef} from 'react'

console.log(formatPhoneNumber('+902133734253'));


function animatePlaceholder(animation, reversed){
    let value = 5;
    reversed ? value = 15 : null;
    Animated.timing(animation,{
        toValue: value,
        duration:150,
        useNativeDriver: false,
    }).start();
}

export const GetirPhoneInput = (props) => {
    return(
        <View style={{flex:1, alignItems:"center", justifyContent:"center", padding:30}}>
            <View style={styles.inputContainer} onTouchStart={()=>props.navigation.navigate("CountrySelector")}>
                <Text style={styles.placeholderTextFocused}>Ülke/Bölge Kodu</Text>
                <TextInput style={styles.textInput} value={`(${props.dial_code}) ${props.flag}`} editable={false} />
            </View>
        </View>
    );
}

export const GetirTextInput = (props) => {

    const [style, setStyle] = useState(styles.placeholderText);
    const fadeAnim = useRef(new Animated.Value(16)).current
    const input = useRef(null);
    return(
        <>
        <View style={{flex:1, alignItems:"center", justifyContent:"center", padding:30}}>
            <View style={styles.inputContainer} onTouchStart={()=>input.current.focus()}>
                <Animated.Text style={[styles.placeholderText, {top: fadeAnim}]}>E-posta</Animated.Text>
                <TextInput ref={input} style={styles.textInput} onFocus={()=>animatePlaceholder(fadeAnim)}/>
            </View>
        </View>
        </>
    );
}


var styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        height: 55,
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
        color: colors.gray,
        justifyContent:"center",
        alignContent:"center",
    },
    placeholderTextFocused:{
        position:"absolute",
        top:5,
        left:15,
        color: colors.gray,
        justifyContent:"center",
        alignContent:"center",
    },
    textInput:{
      color:"#333"
    }
});