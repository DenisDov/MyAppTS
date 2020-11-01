import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstScreen from './FirstScreen';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export const HomeNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name="FirstScreen" component={FirstScreen} />
		<Tab.Screen name="Settings" component={Settings} />
	</Tab.Navigator>
);
