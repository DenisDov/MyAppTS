import React from 'react';
import { Box, Text } from '../theme';

interface RenderItem {
	item: {
		id: number;
		name: string;
	};
}

const renderItem = ({ item }: RenderItem) => {
	return (
		<Box key={item.id} padding="m">
			<Text variant="subheader">{item.name}</Text>
		</Box>
	);
};

export default renderItem;
