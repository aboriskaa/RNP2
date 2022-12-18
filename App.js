// color pallet links: https://colorhunt.co/palette/d2001affde00fffae7efefef

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState(0);

	function pickNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}

	return (
		<LinearGradient
			colors={['#EFEFEF', '#FFFAE7']}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require('./assets/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backGroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backGroundImage: {
		opacity: 0.4,
	},
});
