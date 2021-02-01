import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'green',
	},
});

const Settings = (): JSX.Element => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
			<Text>Settings</Text>
		</ScrollView>
	);
};

export default Settings;
