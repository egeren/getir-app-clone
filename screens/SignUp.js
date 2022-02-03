import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { GetirDialCodeInput, GetirTextInput } from '../components/GetirInput';
import {colors, fonts} from '../styles/styles';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { GetirButton } from '../components/GetirButton';

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
                    <Text style={{fontFamily:fonts.regular, fontSize:13.5}}   numberOfLines={2}>Getir'in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum.</Text>
                </View>
            </View>
            <View style={styles.privacyTextsContainer}>
                <Text style={styles.privacyText}>Kişisel verilerinize dair Aydınlatma Metni için <Text style={{color:colors.primary}}>tıklayınız.</Text></Text>
                <Text style={styles.privacyText}>Üye olmakla, <Text style={{color:colors.primary}}>Kullanım Koşullarını</Text> onaylamış olursunuz.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <GetirButton disabled={true} />
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
        fontFamily:fonts.regular,
        paddingTop:10,
        fontSize:13.5,
    },
    buttonContainer:{
        paddingTop:20,
    }

});

export default SignUp;