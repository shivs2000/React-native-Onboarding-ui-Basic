import React from "react";
import {
    Text,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingUi=({navigation})=>{


    const Next=({...props})=>(
       <TouchableOpacity style={{marginHorizontal:12}} {...props}>
           <Text style={{fontSize:16}}>
               Done
           </Text>
       </TouchableOpacity>
            
        
    );
    return(
        <Onboarding
        onDone={()=>{navigation.navigate("Login")}}
        onSkip={()=>{navigation.navigate("Login")}}
        DoneButtonComponent={Next}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onboarding-img1.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboarding-img2.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboarding-img3.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    
  ]}
/>
    );

}

export default OnBoardingUi;