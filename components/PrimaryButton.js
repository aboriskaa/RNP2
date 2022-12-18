import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Colors from './colors';

export default function PrimaryButton({ children, onPress }) {
	function pressHandler() {
		onPress();
	}
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={pressHandler}
				android_ripple={{ color: Colors.primary600 }}
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
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		elevation: 2,
		paddingHorizontal: 16,
	},
	buttonText: {
		color: Colors.primary600,
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});
