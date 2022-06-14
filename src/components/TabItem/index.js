import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../utils/Colors';

Octicons.loadFont();
Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? (
        <Octicons name="home" size={23} color={COLORS.active} />
      ) : (
        <Octicons name="home" size={23} color={COLORS.noActive} />
      );
    if (label === 'Search')
      return isFocused ? (
        <Octicons name="search" size={23} color={COLORS.active} />
      ) : (
        <Octicons name="search" size={23} color={COLORS.noActive} />
      );
    if (label === 'Your Library')
      return isFocused ? (
        <Entypo name="folder-music" size={23} color={COLORS.active} />
      ) : (
        <Entypo name="folder-music" size={23} color={COLORS.noActive} />
      );
    if (label === 'Premium')
      return isFocused ? (
        <Entypo name="spotify" size={27} color={COLORS.active} />
      ) : (
        <Entypo name="spotify" size={27} color={COLORS.noActive} />
      );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label.replace(' ', '\n')}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 12,
    color: isFocused ? COLORS.active : COLORS.noActive,
    marginTop: 2,
    textAlign: 'center',
  }),
});
