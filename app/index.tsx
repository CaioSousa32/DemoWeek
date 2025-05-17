import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
const {height} = Dimensions.get('window');

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/animations/background.gif')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      > 
      <View style={styles.content}>
      <Image
      source={require('../assets/animations/Astrounata.gif')}
      style={styles.gif}
      resizeMode="contain"
      />
        <Image 
        source ={require('../assets/images/DemoWeek.png')} 
        resizeMode='contain'
        style={styles.logoImage}
        />
      </View>
      <View style={styles.footer}>
        <Image
        source={require('../assets/images/UniLab.png')}
        resizeMode="contain"
        style={styles.logoLab}
        />
      </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: height * 0.15,
    alignItems: 'center',
  
  },
  footer: {
    alignItems: 'center',
    marginBottom: height * 0.12,
  },
  logoLab: {
    width: 200,
    height: 80,
  },
  logoImage: {
    width: 250,
    height: 150,
  },
  gif: {
    width: 100,
    height: 100,
  },
});
