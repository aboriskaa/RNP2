import { Text, StyleSheet } from 'react-native';

import Colors from '../colors';

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		// Colors.primary600,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: 'white',
		// Colors.primary600,
		padding: 12,
	},
});
