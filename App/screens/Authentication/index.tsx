import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';

const Stack = createStackNavigator();

export const AuthenticationNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};
