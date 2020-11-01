import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from '../theme';

interface SeparatorProps {
	bgcolor: any; // TODO: add type
}
const Separator = ({ bgcolor }: SeparatorProps) => (
	<Box height={StyleSheet.hairlineWidth} backgroundColor={bgcolor} marginHorizontal="m" />
);

Separator.defaultProps = {
	bgcolor: 'black',
};

export default Separator;
