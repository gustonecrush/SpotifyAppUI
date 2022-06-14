import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import COLORS from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icons = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Heart')
      return isFocused ? (
        <MaterialCommunityIcons name="heart" size={30} color="#d01760" />
      ) : (
        <MaterialCommunityIcons
          name="heart-outline"
          size={30}
          color={COLORS.active}
        />
      );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Icons;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
