import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../utils/Colors';
import {SpotifyLogo} from '../../assets';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const PlaylistScreen = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <LinearGradient
      colors={['#52534E', '#272725', '#121212']}
      style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={40} color={COLORS.active} />
          </TouchableOpacity>

          <Image style={styles.cover} source={item.cover} />
        </View>

        {/* Descriptions */}
        <Text style={styles.description}>{item.descriptions}</Text>

        {/* Info */}
        <View style={styles.infoWrapper}>
          <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={SpotifyLogo} />
            <Text style={styles.textLogo}>Spotify</Text>
          </View>
          <Text style={styles.info}>
            {item.likes} likes . {item.hours}h {item.minutes}min
          </Text>
        </View>

        {/* Icons */}
        <View style={styles.iconWrapper}>
          <View style={styles.icons}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart-outline"
                size={28}
                color={COLORS.active}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dots}>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={28}
                color={COLORS.active}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.play}>
            <MaterialCommunityIcons name="play" size={35} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Songs */}
        <View style={styles.songsWrapper}>
          {item.songs.map(finalItem => (
            <TouchableOpacity
              key={finalItem.id}
              onPress={() =>
                navigation.navigate('MusicPlayerScreen', {item: finalItem})
              }
              style={styles.cardTrendingWrapper}>
              <Image style={styles.img} source={finalItem.image} />
              <View style={styles.textWrapper}>
                <Text style={styles.titleSong}>{finalItem.title}</Text>
                <View style={styles.infoSong}>
                  <View style={styles.lyricLogo}>
                    <Text style={styles.textLyricLogo}>LYRICS</Text>
                  </View>
                  <Text style={styles.artist}>{finalItem.artist}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.dotsSong}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={28}
                  color={COLORS.active}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingTop: Dimensions.get('window').height * 0.065,
  },
  cover: {
    alignSelf: 'center',
    marginLeft: Dimensions.get('window').width * -0.0095,
    width: 280,
    height: 280,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.text,
    textAlign: 'justify',
    marginHorizontal: 20,
    marginTop: 15,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoWrapper: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  logo: {
    width: 30,
    height: 30,
  },
  textLogo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.active,
    marginLeft: 8,
  },
  info: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: COLORS.text,
    marginTop: 10,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 25,
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
  },
  play: {
    width: 50,
    height: 50,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  dots: {
    marginLeft: 20,
  },
  songsWrapper: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  cardTrendingWrapper: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 10,
  },
  titleSong: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#FFF',
  },
  infoSong: {
    marginTop: 5,
    flexDirection: 'row',
  },
  textLyricLogo: {
    fontFamily: 'Poppins-Bold',
    color: '#121212',
    fontSize: 12,
  },
  lyricLogo: {
    backgroundColor: '#C4C4C4',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  artist: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.text,
    fontSize: 13,
    marginLeft: 8,
  },
  dotsSong: {
    position: 'absolute',
    right: 0,
  },
  img: {
    width: 55,
    height: 55,
  },
});
