import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';

const Stack = createNativeStackNavigator();
export default function Application() {


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ title: 'My home' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}