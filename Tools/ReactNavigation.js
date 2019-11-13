import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//SCREENS
import WelcomeScreen from '../Screens/welcomeScreen'
import ScanningScreen from '../Screens/scanningScreen'

const RootStack = createStackNavigator(
    {
      Home: {
          screen: WelcomeScreen,
          navigationOptions: {
              header:null
          }
      },
      Scanning: ScanningScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
  
 export const AppNavigator = createAppContainer(RootStack);

