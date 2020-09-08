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

const CharsNavigator = createStackNavigator({   //Para mostrar mas info sobre la pantalla,no para tabs
    Characters: Characters,
    Character: CharDetail
});

const LocationNavigator = createStackNavigator({   //Para mostrar mas info sobre la pantalla,no para tabs
    Locations: Locations,
    Location: LocationDetail
});

const EpisodeNavigator = createStackNavigator({   //Para mostrar mas info sobre la pantalla,no para tabs
    Episodes: Episodes,
    Episode: EpisodeDetail
});

const TabNavigator = createBottomTabNavigator({
    Characters: {
        screen: CharsNavigator, navigationOptions: {         // Lo apunto al stack
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-people' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Episodes: {
        screen: EpisodeNavigator, navigationOptions: {         // Lo apunto al stack
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-film' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Locations: {
        screen: LocationNavigator, navigationOptions: {         // Lo apunto al stack
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-locate' size={25} color={tabInfo.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'blue'
    }
});

export default createAppContainer(TabNavigator);   //Paso este que ya contiene el Stack tambien