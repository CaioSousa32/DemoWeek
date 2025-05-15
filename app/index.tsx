import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/animations/background.gif')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      >
        {/* Aqui vão os outros componentes por cima do fundo animado */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
