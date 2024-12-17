import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from './layout/login';
import Home from './layout/home';
import Signup from './layout/signup';
import Transfer from './layout/transfer';
import TopUp from './layout/topUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthProvide, useAuth } from './context/authContext';


export default function App() {
  const Stack = createNativeStackNavigator();
  const HomeTab = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Transfer') {
              iconName = focused ? 'send' : 'send-outline';
            } else if (route.name === 'TopUp') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarSyle={
          {
            height: 70,
            backgroundColor: '#fff',
            paddingBottom: 10
          }
        }
        tabBarOptions={{
          activeTintColor: '#1a7f37',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Transfer" component={Transfer} options={{ headerShown: false }} />
        <Tab.Screen name="TopUp" component={TopUp} options={{ headerShown: false }} />
      </Tab.Navigator>
    )
  }


  function root() {
    return (
      <Stack.Navigator initialRouteName="Login">
        {/* {auth ? ( */}
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />

        {/* ) : ( */}
        {/* <> */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        {/* </> */}
        {/* ) */}
        {/* } */}
      </Stack.Navigator>
    );
  }
  return (
    <AuthProvide>
      <NavigationContainer>
        {root()}
      </NavigationContainer>
    </AuthProvide>
  );
}