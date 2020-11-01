import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const Settings = () => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
			<Text>Settings</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'green',
	},
});

export default Settings;
