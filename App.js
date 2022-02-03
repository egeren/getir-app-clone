import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { TransitionPresets } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {colors} from './styles/styles';
import { StatusBar } from 'expo-status-bar';
import Splash from './screens/Splash';
import SignUp from './screens/SignUp';
import CountrySelector from './screens/CountrySelector';
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const headerOptions = (title)=>{
  return {
    headerTitle: '',
    animationEnabled: true,
    headerTintColor: '#fff',
    presentation: 'modal',
    headerBackground: () => 
    <View style={styles.headerContainer}>
      {title ?
      <Text style={{color:"white"}}>{title}</Text>
      :
      <Image style={styles.headerImage} source={require('./assets/getir_logo.png')} resizeMode='contain'></Image>
      }
    </View>
  };
}

const screenOptionStyle = {
  // headerShown: false,  
  animation: "slide_from_right",
}; 

export default function App() {
  let [fontsLoaded] = useFonts({
    'Manrope Light' : require('./assets/fonts/manrope/Manrope-Light.ttf'),
    'Manrope Regular' : require('./assets/fonts/manrope/Manrope-Regular.ttf'),
    'Manrope Medium' : require('./assets/fonts/manrope/Manrope-Medium.ttf'),
    'Manrope Bold' : require('./assets/fonts/manrope/Manrope-SemiBold.ttf'),
  });
  if(!fontsLoaded){
    return <Text>Loading...</Text>;
  }
  return (
    <>
    <StatusBar backgroundColor={colors.darkPurple} />
    <SafeAreaView style={{flex:1}}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptionStyle}>
              <Stack.Screen name="Splash" component={Splash} options={headerOptions()}/>
              <Stack.Screen name="SignUp" component={SignUp} options={headerOptions("Üye Ol")} />
              <Stack.Screen name="CountrySelector" component={CountrySelector} options={headerOptions("Ülke Seç")}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerContainer:{
    display:"flex",
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: colors.primary,
  },
  headerImage:{
    height:"100%",
    height:"50%",
    alignItems:"center",
    justifyContent:"center",
    margin:0,
    padding:0,
  }
});
