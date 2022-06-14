import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SpotifyLogo} from '../../assets';

const StartupScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 4000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Image style={styles.logo} source={SpotifyLogo} />
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
  },
});
