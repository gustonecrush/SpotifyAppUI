import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../utils/Colors';

const Card = ({color, title}) => {
  return (
    <TouchableOpacity style={styles.container(color)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: color => ({
    width: 170,
    height: 116,
    backgroundColor: color,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 20,
    marginRight: 20,
  }),
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: COLORS.active,
    width: '60%',
  },
});
