import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FetchingTodosRequest } from '../../redux/actions/getTodos';

import { Text, Box } from '../../theme';

import { RenderItem, Separator, AppButton } from '../../components';

const Login = ({ navigation }) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.jsonplaceholder.data);
	useEffect(() => {
		dispatch(FetchingTodosRequest());
	}, [dispatch]);

	const ItemSeparatorComponent = () => <Separator bgcolor="separator" />;

	const ListFooterComponent = (
		<AppButton label="Go to home" onPress={() => navigation.navigate('Home')} />
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Box flex={1} backgroundColor="mainBackground">
				{data.length ? (
					<FlatList
						data={data}
						renderItem={RenderItem}
						ItemSeparatorComponent={ItemSeparatorComponent}
						ListFooterComponent={ListFooterComponent}
						ListEmptyComponent={<Text>List is empty</Text>}
						keyExtractor={(item) => `${item.id}`}
					/>
				) : (
					<Box flex={1} justifyContent="center">
						<ActivityIndicator size="large" />
					</Box>
				)}
			</Box>
		</SafeAreaView>
	);
};

export default Login;
