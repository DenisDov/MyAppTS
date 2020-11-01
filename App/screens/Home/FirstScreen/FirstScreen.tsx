import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const FirstScreen = () => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
			<Text>FirstScreen</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'rebeccapurple',
	},
});

export default FirstScreen;
