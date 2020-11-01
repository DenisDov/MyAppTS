import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from '@shopify/restyle';
import { theme } from './theme';

import { Provider } from 'react-redux';
import createStore from './redux';

import { AuthenticationNavigator } from './screens/Authentication';
import { HomeNavigator } from './screens/Home';

const store = createStore();
const Stack = createStackNavigator();
let a = '3';
console.log(a);
const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<SafeAreaProvider>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen name="Authentication" component={AuthenticationNavigator} />
							<Stack.Screen name="Home" component={HomeNavigator} />
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
