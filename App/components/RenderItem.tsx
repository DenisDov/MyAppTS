import React from 'react';
import { Box, Text } from '../theme';

interface renderItem {
	item: {
		id: number;
		name: string;
	};
}

const renderItem = ({ item }: renderItem) => {
	return (
		<Box key={item.id} padding="m">
			<Text variant="subheader">{item.name}</Text>
		</Box>
	);
};

export default renderItem;
