import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Icons
import { Ionicons } from '@expo/vector-icons';

// Components
import Characters from '../Components/Characters';
import CharDetail from '../Components/MoreInfo/CharDetail';
import Episodes from '../Components/Episodes';
import EpisodeDetail from '../Components/MoreInfo/EpisodeDetail';
import Locations from '../Components/Locations';
import LocationDetail from '../Components/MoreInfo/LocationDetail';


const CharsNavigator = createStackNavigator({
    Characters: Characters,
    Character: CharDetail
},
    {
        defaultNavigationOptions: {
            headerTitleAlign: 'center'
        }
    }
);

const LocationNavigator = createStackNavigator({
    Locations: Locations,
    Location: LocationDetail
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center'
    }
});

const EpisodeNavigator = createStackNavigator({
    Episodes: Episodes,
    Episode: EpisodeDetail
},
    {
        defaultNavigationOptions: {
            headerTitleAlign: 'center'
        }
    });

const TabNavigator = createBottomTabNavigator({
    Characters: {
        screen: CharsNavigator, navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-people' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Episodes: {
        screen: EpisodeNavigator, navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-film' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Locations: {
        screen: LocationNavigator, navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-locate' size={25} color={tabInfo.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#562FA9'
    }
});

export default createAppContainer(TabNavigator);