import React,{useEffect,useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './Screens/LoginScreen';
import OnBoardingUi from './Screens/OnBoardingUi';

const Stack=createNativeStackNavigator();
const App= () => {

  const [isFirstLaunch,SetisFirstLaunch]=useState(null);
useState(()=>{

  AsyncStorage.getItem('alreadyLaunched').then((value)=>{
    if(value===null){
      AsyncStorage.setItem('alreadyLaunched','true');
      SetisFirstLaunch(true);
    }
    else{
      SetisFirstLaunch(false);
    }

  })

},[]);
   if(isFirstLaunch===null){
     return null;
   } else if(isFirstLaunch===true){
return(
<NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingUi" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OnBoardingUi" component={OnBoardingUi} />
      </Stack.Navigator>
    </NavigationContainer>
);
   }
else{
   return (
    <LoginScreen/>
  );
   }
};

const styles = StyleSheet.create({
 
});

export default App;
