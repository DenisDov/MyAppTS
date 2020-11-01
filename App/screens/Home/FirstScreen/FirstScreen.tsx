import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'rebeccapurple',
	},
});

const FirstScreen = () => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
			<Text>FirstScreen</Text>
		</ScrollView>
	);
};

export default FirstScreen;
