import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {Card} from '../../components';
import COLORS from '../../utils/Colors';

Octicons.loadFont();

const SearchScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      vertical
      showsHorizontalScrollIndicator={false}>
      <Text style={styles.header}>Search</Text>
      <View style={styles.searchBar}>
        <Octicons name="search" size={25} color="#181818" />
        <TextInput
          style={styles.textSearch}
          placeholder="Artists, songs, or podcasts"
        />
      </View>
      <View style={styles.topGenreWrapper}>
        <Text style={styles.textHeader}>Your top gendres</Text>
        <View style={styles.cardWrapper}>
          <Card color="#8C67AC" title="Pop" />
          <Card color="#1E3264" title="Rock" />
        </View>
      </View>

      <View style={styles.topGenreWrapper}>
        <Text style={styles.textHeader}>Browse all</Text>
        <View style={styles.cardWrapper}>
          <Card color="#E13300" title="Pop" />
          <Card color="#E8125C" title="New Releases" />
        </View>
        <View style={styles.cardWrapper}>
          <Card color="#4CAF50" title="Made for You" />
          <Card color={COLORS.text} title="Concerts" />
        </View>
        <View style={styles.cardWrapper}>
          <Card color="#1E3264" title="At Home" />
          <Card color="#477D95" title="Charts" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: Dimensions.get('window').height * 0.095,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  textSearch: {
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
    marginLeft: 20,
    fontSize: 15,
    color: '#525252',
    opacity: 0.92,
  },
  header: {
    fontSize: 35,
    color: COLORS.active,
    marginHorizontal: 15,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  topGenreWrapper: {
    marginHorizontal: 15,
    marginBottom: -15,
  },
  cardWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: COLORS.active,
    marginBottom: 15,
    marginTop: 20,
  },
});
