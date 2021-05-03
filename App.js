import React,{Component} from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppTabNavigator } from "./Components/AppTabNavigator";


import AvailableBedScreen from "./Screens/AvailableBeds";
import BedDetailsScreen from "./Screens/BedDetails";
import DonatePlasmaScreen from "./Screens/DonatePlasmaScreen";
import InformBedScreen from './Screens/InformBedScreen';
import LoginScreen from "./Screens/LoginScreen";
import RequestPlasmaScreen from "./Screens/RequestPlasmaScreen";
import ReceiverDetailsScreen from "./Screens/ReceiverDetails";


export default function App () {
  
    return <AppContainer/>
  }

const switchNavigator = createSwitchNavigator({
  BottomTab : {screen: AppTabNavigator},
  InformBed: {screen: InformBedScreen},
  DonatePlasma: {screen: DonatePlasmaScreen},
  RequestPlasma: {screen: RequestPlasmaScreen},
  AvailableBed: {screen: AvailableBedScreen},
  BedDetails: {screen: BedDetailsScreen},
  ReceiverDetails: {screen: ReceiverDetailsScreen}
})

const AppContainer = createAppContainer(switchNavigator);
    