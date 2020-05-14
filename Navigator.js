import React from 'react';
import { Platform} from 'react-native'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home'
import About from './screens/About'
import One from './screens/1'
import Two from './screens/2'
import Three from './screens/3'
import Four from './screens/4'
import Five from './screens/5'

const AboutNav = createStackNavigator({
  About:{
    screen:About,
    navigationOptions: {
      headerStyle:{
        backgroundColor:'#a3e2f3'
      },
      title: 'About',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
},{

})

const Inversions = createSwitchNavigator({
  One:One,
  Two:Two,
  Three:Three,
  Four:Four,
  Five:Five
},{
  defaultNavigationOptions:{
    title:'',
    headerStyle:{
      height:0,
      
    }
  }
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle:{
        backgroundColor:'#a3e2f3',
        height:60
      },
      title: 'Choose Workout',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  },
  About:{
    screen:About,
    navigationOptions: {
      headerStyle:{
        backgroundColor:'#a3e2f3',
        height:60
      },
      title: 'About',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  },
  Inversions: {
    screen: Inversions,
    navigationOptions: {
     headerStyle:{
      backgroundColor:'#be5ff4',
      height:60
     },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:'white'
      }
    }
  },
},
  {
    defaultNavigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white'
      },
    }
  });

  const DrawerNavigator = createDrawerNavigator({
    Home: {
      screen: AppNavigator,
    },
    About:{
      screen:AboutNav
    }
  },
  );

  export default createAppContainer(DrawerNavigator)