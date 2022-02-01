import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import {GetirPhoneInput} from '../components/GetirInput';

function SignUp({route, navigation}) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);
    console.log(route.params);
    return (
        <>
        <View onTouchStart={()=>console.log(route.params)}>
            <GetirPhoneInput navigation={navigation} dial_code={route.params.dial_code} flag={route.params.flag} />
        </View>
        </>
    )
}

export default SignUp;