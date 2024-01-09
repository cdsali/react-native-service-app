import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './pages/Start';
import HomeScreen from './pages/Home';
import AccountScreen from './pages/Account';
import SearchScreen from './pages/Search';
import ServiceScreen from './pages/Details';
; // Add import for the HomeScreen
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import any icon libraries or images you need
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo, otherwise choose an appropriate library
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Start" headerMode="none">
                    <Stack.Screen name="Start" component={StartScreen} />
                    <Stack.Screen name="Service" component={ServiceScreen} />
                    <Stack.Screen name="HomeTabs" component={HomeTabs} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

const HomeTabs = () => {
    return (
       <Tab.Navigator
      screenOptions = {({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
        } else if (route.name === 'Account') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
        }

        
        return <Ionicons name={iconName} size={size} color={focused ? 'rgba(0,1,1,0.7)' : 'gray'} />;
    },
})}
tabBarOptions = {{
    activeTintColor: 'rgba(0,1,1,0.7)', 
    inactiveTintColor: 'gray',
    
 
   
            }}

            options={{ tabBarStyle: { backgroundColor: 'rgba(216,207,198,1)' } }}
    >

            <Tab.Screen name="Home" component={HomeScreen}  />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
            
           
        </Tab.Navigator>
    );
};

export default App;

