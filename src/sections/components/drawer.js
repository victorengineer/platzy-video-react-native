import React from 'react';

import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	StyleSheet
} from 'react-native';

import { DrawerItems } from 'react-navigation';

function Drawer(props){
	return(
		//el safe area view evita que el status bar se mezcle con el texto
		// el scrollview agrega un scroll
		<ScrollView>
			<SafeAreaView>
				<Image
					source={require('../../../assets/logo.png')}
					style={styles.logo}
				/>
				<DrawerItems {...props} />
			</SafeAreaView>
		</ScrollView>
		
	);
}

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 26,
		resizeMode: 'contain',
		marginVertical: 20,
		marginLeft: 10,
	}
});

export default Drawer;