import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator, Drawer} from 'react-navigation-drawer';

//SCREENS
import WelcomeScreen from '../Screens/welcomeScreen'
import ScanningScreen from '../Screens/scanningScreen'

//COMPONENTS
import {DrawerContentComponent} from '../Components/drawerContentComponent'
import { SearchScreen } from '../Screens/searchScreen';

//DRAWER
const AppDrawerNavigator = createDrawerNavigator({
  Scanning: {
    screen: ScanningScreen,
  },
  Search: {
    screen: SearchScreen
  },
}, {
  drawerType: 'slide',
  overlayColor: 'rgba(255,255,255, 0)',
  lazy:'true',
  backBehavior:'initialRoute',
  contentComponent: DrawerContentComponent,
})

//STACK

const RootStack = createStackNavigator(
    {
      Home: {
          screen: WelcomeScreen,
          navigationOptions: {
              header:null
          }
      },
      Scanning: { 
        screen: AppDrawerNavigator, 
        navigationOptions: {
          header:null
      }
       }
    },
    {
      initialRouteName: 'Home',
    }
  );
  
 export const AppNavigator = createAppContainer(RootStack);

