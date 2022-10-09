import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export default function PrimaryButton({ children, onPress }) {
	function pressHandler() {
		onPress();
	}
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={pressHandler}
				android_ripple={{ color: '#D2001A' }}
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}
const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
	},
	buttonInnerContainer: {
		backgroundColor: '#FFFAE7',
		paddingVertical: 8,
		elevation: 2,
		paddingHorizontal: 16,
	},
	buttonText: {
		color: '#D2001A',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});
