import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FacebookLogo, GoogleLogo, PhoneLogo} from '../../assets';
import COLORS from '../../utils/Colors';

MaterialCommunityIcons.loadFont();

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name="spotify"
          color={COLORS.active}
          size={80}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.textHeader}>Millions of song</Text>
          <Text style={styles.textHeader}>Free on Spotify</Text>
        </View>
        <View style={styles.loginWrapper}>
          <TouchableOpacity style={styles.loginBtnSignup}>
            <Text style={styles.textSignup}>Sign up free</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Image source={PhoneLogo} style={styles.logo} />
            <Text style={styles.textSignup}>Continue with phone number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Image source={GoogleLogo} style={styles.logo} />
            <Text style={styles.textSignup}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Image source={FacebookLogo} style={styles.logo} />
            <Text style={styles.textSignup}>Continue with facebook</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.125,
  },
  textWrapper: {
    marginTop: 30,
    marginBottom: 50,
  },
  textHeader: {
    color: COLORS.active,
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    textAlign: 'center',
  },
  loginBtn: {
    marginBottom: 8,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  loginBtnSignup: {
    marginBottom: 8,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  logo: {
    width: 20,
    height: 20,
  },
  textSignup: {
    fontSize: 16,
    color: COLORS.active,
    fontFamily: 'Poppins-Bold',
    width: '80%',
    marginLeft: -5,
    textAlign: 'center',
  },
  loginText: {
    fontSize: 20,
    marginTop: 20,
    color: COLORS.active,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  loginWRapper: {
    width: '80%',
  },
});
