import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from '../theme';

interface AppButtonProps {
	onPress: () => void;
	label: string;
}

const AppButton = ({ onPress, label }: AppButtonProps) => {
	return (
		<RectButton
			{...{ onPress }}
			style={{
				padding: 16,
				backgroundColor: 'tomato',
			}}>
			<Text textAlign="center" textTransform="uppercase">
				{label}
			</Text>
		</RectButton>
	);
};

export default AppButton;
