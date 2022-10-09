import { View, Text, StyleSheet, Button, BackHandler } from 'react-native';
import React from 'react';

export default function GameScreen() {
	// function logout() {
	// 	BackHandler.exitApp();
	// }
	return (
		<View style={styles.rootScreen}>
			<Text>GameScreen</Text>
			<Button
				// onPress={logout}
				title='exit'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		alignItems: 'center',
		marginTop: 100,
		flex: 1,
	},
});
