import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import {GetirDialCodeInput, GetirTextInput} from '../components/GetirInput';
import {colors} from '../styles/colors';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function SignUp({route, navigation}) {
    
    const [phoneDetails, setPhoneDetails] = useState({ dial_code: '+90', flag: '🇹🇷' });
    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
        if(route.params)
        {
            setPhoneDetails({
                dial_code: route.params.dial_code,
                flag: route.params.flag
            }) 
        }
    },[route.params]);
    return (
        <>
        <View style={styles.container}>
            <View style={styles.phonesContainer}>
                <View style={styles.dialCode}>
                    <GetirDialCodeInput navigation={navigation} dial_code={phoneDetails.dial_code} flag={phoneDetails.flag} />
                </View>
                <View style={styles.phone}>
                    <GetirTextInput placeholder="Cep telefonu"/>
                </View>
            </View>
            <View style={styles.userDetails}>
                <View style={styles.detailInput}>
                    <GetirTextInput placeholder="Ad Soyad"/>
                </View>
                <View style={styles.detailInput}>
                    <GetirTextInput placeholder="E-posta"/>
                </View>
            </View>
            <View style={styles.promotionContainer}>
                <View style={styles.checkboxContainer}>
                    <Checkbox value={isChecked} onValueChange={setChecked} color={colors.primary} style={styles.checkbox}/>
                </View>
                <View style={styles.checkboxTextContainer}>
                    <Text>Getir'in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum.</Text>
                </View>
            </View>
            <View style={styles.privacyTextsContainer}>
                <Text style={styles.privacyText}>Getir'in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum.</Text>
                <Text style={styles.privacyText}>Getir'in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum.</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    phonesContainer:{
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    dialCode:{
        flex:.24,
    },
    phone:{
        flex:.74,
    },
    userDetails:{

    },
    detailInput:{
        paddingTop:10,
    },
    promotionContainer:{
        paddingTop:15,
        flexDirection:"row",
        alignItems:"center",
    },
    checkbox:{
        width:25,
        height:25,
        borderRadius:3,
        borderWidth:.7,
        padding:10,
    },
    checkboxTextContainer:{
        flex:1,
        paddingLeft:10,
    },
    privacyTextsContainer:{

    },
    privacyText:{
        paddingTop:10,
    }

});

export default SignUp;