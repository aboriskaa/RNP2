import { View, Text, StyleSheet, Button, BackHandler } from 'react-native';
import React from 'react';
import Title from '../components/Title';
export default function GameScreen() {
	// function logout() {
	// 	BackHandler.exitApp();
	// }
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<View>
				{/* <Text>Higher or lower?</Text>
				+- */}
			</View>
			{/* <Text>LOG ROUNDS</Text> */}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 38,
	},
});
