import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstScreen from './FirstScreen';
import Settings from './Settings';

const Tabs = createBottomTabNavigator();

export const HomeNavigator: React.FC = () => (
	<Tabs.Navigator>
		<Tabs.Screen name="FirstScreen" component={FirstScreen} />
		<Tabs.Screen name="Settings" component={Settings} />
	</Tabs.Navigator>
);
