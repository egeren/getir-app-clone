import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, Touchable, View, TouchableOpacity, Image } from 'react-native';
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
                    <GetirTextInput placeholder="Cep telefonu" keyboardType="phone-pad"/>
                </View>
            </View>
            <View style={styles.userDetails}>
                <View style={styles.detailInput}>
                    <GetirTextInput placeholder="Ad Soyad"/>
                </View>
                <View style={styles.detailInput}>
                    <GetirTextInput placeholder="E-posta" keyboardType="email-address"/>
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
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={{paddingHorizontal:10}}>
                    <Text style={{color:colors.gray, fontFamily:fonts.bold}}>veya hesabınızla bağlanın</Text>
                </View>
                <View style={styles.line} />
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/images/google.png')} resizeMode='contain' style={{flex:.1,height:"100%"}}/>
                    <Text style={styles.socialTexts}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor:"#1877F2"}]}>
                    <Image source={require('../assets/images/facebook.png')} resizeMode='contain' style={{flex:.15,height:"100%"}}/>
                    <Text style={[styles.socialTexts, {color:"white"}]}>Facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginText}>
                <Text style={{color:colors.gray, fontFamily: fonts.bold}}>
                    Hesabınız var mı? &nbsp;
                </Text>
                <Text style={{color:colors.primary, fontFamily: fonts.bold}}>
                    Giriş Yap
                </Text>
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
    },
    lineContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:30,

    },
    line:{
        flex:1,
        height:1,
        backgroundColor:colors.gray,
        paddingHorizontal:10,
    },
    socialContainer:{
        flexDirection:"row",
        paddingTop:20,
    },
    button:{
        marginHorizontal:5,
        flex:1,
        height:50,
        borderWidth:1,
        borderColor:"#1877F2",
        borderRadius:10,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
    },
    socialTexts:{
        color:colors.gray,
        flexDirection:"row",
        fontFamily:fonts.bold,
        paddingLeft:7
    },
    loginText:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        paddingTop:20,
    }

});

export default SignUp;