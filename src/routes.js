import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from './pages/Main/index';
import NewEntry from './pages/NewEntry/index';
import Welcome from './pages/Welcome/index';
import Report from './pages/Report/index';
import Loading from './pages/Loading/index';
import Home from './pages/Home';
import Calculadora from './pages/calculadora/Calculadora';
import CampoMinado from './components/campoMinado/CampoMinado';

export default function Routes() {
    const Drawer = createDrawerNavigator();
    // const Stack = createStackNavigator();
    // const MaterialBottomTabs = createMaterialBottomTabNavigator();
    // const MaterialTopTabs = createMaterialTopTabNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Loading"
        >
            <Drawer.Screen name="Loading" component={Loading} />
            <Drawer.Screen name="Welcome" component={Welcome} />
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="NewEntry" component={NewEntry} />
            <Drawer.Screen name="Report" component={Report} />
            <Drawer.Screen name="Smart Bank 1.0" component={Home} />
            <Drawer.Screen name="Calculadora" component={Calculadora} />
            <Drawer.Screen name="Campo Minado" component={CampoMinado} />
        </Drawer.Navigator>
    );
}

