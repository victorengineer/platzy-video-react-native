import React from 'react';
import { 
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator,
	createDrawerNavigator
} from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from './sections/components/header';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Lucky from './screens/containers/lucky';
import Icon from './sections/components/icon';
import Loading from './screens/containers/loading';
import Login from './screens/containers/login';
import DrawerComponent from './sections/components/drawer';

const Main = createStackNavigator(
  {
    Home: Home,
    Category
  },
  {
  	navigationOptions: {
  		header: Header,
  	}
  }
)

const TabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: Main,
			navigationOptions: {
				title: 'Inicio',
				tabBarIcon: <Icon icon="🏠" />,
				drawerIcon: <Icon icon="🏠" />,
			}
		},
		About: {
			screen: About,
		},
		Lucky: {
			screen: Lucky,
		},
		Profile: {
			screen: Profile,
		}
	},
	{
		tabBarOptions: {
			activeTintColor: 'white',
			activeBackgroundColor: '#65a721'
		}
	}
);


const WithModal = createStackNavigator(
	{
		Main: {
			screen: TabNavigator
		},
		Movie: Movie,
	},
	{
		mode: 'modal',
		headerMode: 'none',
		cardStyle: {
			backgroundColor: 'white'
		},
		navigationOptions: {
			gesturesEnabled: true
		}
	}
);

const DrawerNavigator = createDrawerNavigator(
	{
		Main: {
			screen: WithModal,
			navigationOptions: {
				title: 'Inicio',
				drawerIcon: <Icon icon="🏠" />
			}
		},
		Acerca: {
			screen: About
		},
		Lucky: {
			screen: Lucky
		},
		Perfil: {
			screen: Profile
		}
	},
	{
		drawerWidth: 200,
		drawerBackgroundColor: '#f6f6f6',
		contentComponent: DrawerComponent,
		contentOptions: {
			activeBackgroundColor: '#65a721',
			activeTintColor: 'white',
			inactiveTintColor: '#828282',
			inactiveBackgroundColor: 'white',
			itemStyle: {
				borderBottomWidth: 0.5,
				borderBottomColor: 'rgba(0,0,0,0.5'
			},
			labelStyle: {
				marginHorizontal: 0,
			},
			iconContainerStyle:{
				marginHorizontal: 5,
			}
		}
	}
);


const SwitchNavigator = createSwitchNavigator(
	{
		App: DrawerNavigator,
		Login: Login,
		Loading: Loading,
	},
	{
		initialRouteName: 'Loading',
	}
);

export default SwitchNavigator;