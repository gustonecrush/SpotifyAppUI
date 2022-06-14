import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../utils/Colors';
import {Users} from '../../assets';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();

const YourLibrary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.user}>
            <Image style={styles.imgProfile} source={Users.profile} />
            <Text style={styles.textUser}>Your Library</Text>
          </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <Feather name="search" size={25} color={COLORS.active} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.add}>
              <Feather name="plus" size={30} color={COLORS.active} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Category */}
        <ScrollView
          horizontal
          style={styles.categoryWrapper}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Artists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Albums</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Podcasts & Shows</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Icon */}
        <View style={styles.icons}>
          <View style={styles.iconWrapperArrow}>
            <MaterialIcons name="arrow-downward" color="#FFF" size={20} />
            <View style={styles.arrowUp}>
              <MaterialIcons name="arrow-upward" color="#FFF" size={20} />
            </View>
          </View>
          <Feather name="list" size={20} color={COLORS.active} />
        </View>

        {/* Playlists */}
        <View style={styles.playlistWrapper}>
          <View style={styles.row}>
            {Users.playlists.map(item =>
              item.map(finalItem => (
                <TouchableOpacity
                  key={finalItem.id}
                  onPress={() =>
                    navigation.navigate('PlaylistScreen', {item: finalItem})
                  }
                  style={styles.column}>
                  <Image style={styles.cover} source={finalItem.cover} />
                  <Text style={styles.infoPlaylist}>{finalItem.name}</Text>
                  <Text style={styles.infoPlaylistText}>
                    Playlist . {Users.username}
                  </Text>
                </TouchableOpacity>
              )),
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default YourLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    paddingTop: Dimensions.get('window').height * 0.075,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textUser: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: COLORS.active,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  add: {
    marginLeft: 15,
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  category: {
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 15,
  },
  categoryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#FFF',
  },
  categoryWrapper: {
    marginHorizontal: 15,
    marginTop: 25,
  },
  iconWrapperArrow: {
    flexDirection: 'row',
  },
  arrowUp: {
    marginLeft: -5,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  playlistWrapper: {
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  cover: {
    width: Dimensions.get('window').width * 0.41,
    height: 150,
    marginRight: 20,
  },
  infoPlaylist: {
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
    color: '#FFF',
  },
  infoPlaylistText: {
    fontFamily: 'Poppins-Medium',
    marginTop: 4,
    color: COLORS.text,
  },
});
