import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView  from 'lottie-react-native'
import { colors } from '../styles/colors';

export default function Splash({ navigation }) {
  return (
      <View style={styles.container}>

          <View style={styles.lottieContainer}>
            <LottieView source={require('../assets/lotties/splash-food.json')} autoPlay={true} loop style={{width:"100%"}}/>
          </View>
          <View style={styles.buttonsContainer}>
              <Text style={[styles.textButtons]}>Üye Olmadan Devam Et</Text>
              <TouchableOpacity  style={styles.signUpButton} onPress={()=> navigation.navigate('SignUp')}>
                  <Text style={{color:"white"}}>Üye ol</Text>
              </TouchableOpacity>
              <Text style={[styles.textButtons]}>
                  Hesabınız var mı? &nbsp;
                  <Text style={{color:colors.primary}}>Giriş</Text>
                </Text>
          </View>

      </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:25,
  },
  backgroundImage:{
    flex:1,
    position:"absolute",
  },
  lottieContainer:{
    width:"100%",
    flex:1,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  buttonsContainer:{
      width: "100%",
      height: 150,
      alignItems: "center",
      justifyContent: "center",
  },
  textButtons:{
      color:colors.gray,
      padding:20,
  },
  signUpButton:{
      backgroundColor:colors.primary,
      display:"flex",
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:7,
      padding:15,
  }
});
