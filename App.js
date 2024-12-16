import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from './layout/login';
import Home from './layout/home';
import Signup from './layout/signup';
import Transfer from './layout/transfer';
import TopUp from './layout/topUp';


export default function App() {
  const Stack = createNativeStackNavigator();
  const HomeTab = createNativeStackNavigator();

  function Intial() {
    return(
      <Stack.Navigator>
        <Stack.Navigator initialRouteName='Login'/>
      </Stack.Navigator>
    )
  }
  function HomeStack() {
    return (
      <HomeTab.Navigator>
        <HomeTab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <HomeTab.Screen name="Transfer" component={Transfer} options={{ headerShown: false }}/>
        <HomeTab.Screen name="TopUp" component={TopUp} options={{ headerShown: false }}/>
      </HomeTab.Navigator>
    );
  }

  function root() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name='Transfer' component={Transfer} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {root()}
    </NavigationContainer>
  );
}

