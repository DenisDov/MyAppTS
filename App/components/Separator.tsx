import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from '../theme';
import { Theme } from '../theme/Theme';

interface SeparatorProps {
	bgcolor: keyof Theme['colors'];
}
const Separator = ({ bgcolor }: SeparatorProps) => (
	<Box height={StyleSheet.hairlineWidth} backgroundColor={bgcolor} marginHorizontal="m" />
);

Separator.defaultProps = {
	bgcolor: 'black',
};

export default Separator;
