import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import Signup from '../screens/Signup';
import Login from '../screens/Login';
import AddressSelect from '../screens/AddressSelect';
import ChosenCuisine from '../screens/ChosenCuisine';
import Restaurants from '../screens/Restaurants';
import RestaurantDetails from '../screens/RestaurantDetails';
import MapScreen from '../screens/MapScreen'

const Navigator = createStackNavigator({
    Signup: Signup,
    Login: Login,
    AddressSelect: AddressSelect,
    ChosenCuisine: ChosenCuisine,
    Restaurants: Restaurants,
    RestaurantDetails: RestaurantDetails,
    Map: MapScreen,
});

export default createAppContainer(Navigator);