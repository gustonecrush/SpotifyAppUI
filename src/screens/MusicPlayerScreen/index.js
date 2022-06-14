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
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from '../../components/Icons';
import COLORS from '../../utils/Colors';

const MusicPlayerScreen = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <LinearGradient
      colors={['#5E5A4F', '#35322D', '#1D1C1A']}
      style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-down" color={COLORS.active} size={25} />
          </TouchableOpacity>

          <View style={styles.text}>
            <Text style={styles.playingFrom}>PLAYING</Text>
            <Text style={styles.titleSong}>
              {item.title} in {item.category}
            </Text>
          </View>

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              color={COLORS.active}
              size={25}
            />
          </TouchableOpacity>
        </View>

        {/* Thumbnail */}
        <View style={styles.thumbnailWrapper}>
          <Image style={styles.thumbnail} source={item.image} />
        </View>

        {/* Info Song */}
        <View style={styles.infoWrapper}>
          <View style={styles.songWrapper}>
            <Text style={styles.titleHeader}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Icons label="Heart" />
          </View>
        </View>

        {/* Bar Playing */}
        <View style={styles.playingWrapper}>
          <View style={styles.playingProgress}></View>
          <TouchableOpacity style={styles.bulletProgress}></TouchableOpacity>
        </View>
        <View style={styles.timePlaying}>
          <Text style={styles.textTime}>1.23</Text>
          <Text style={styles.textTime}>{item.duration}</Text>
        </View>

        {/* View Icons Playing */}
        <View style={styles.iconsPlayingWrapper}>
          <TouchableOpacity>
            <Feather name="shuffle" color={COLORS.active} size={25} />
          </TouchableOpacity>

          <View style={styles.iconMainPlayingWrapper}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="skip-previous"
                color={COLORS.active}
                size={60}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialCommunityIcons
                name="pause"
                color={COLORS.active}
                size={60}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="skip-next"
                color={COLORS.active}
                size={60}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="replay"
              color={COLORS.active}
              size={30}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.sharingWrapper}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="cast"
              size={20}
              color={COLORS.active}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="share-variant"
              size={20}
              color={COLORS.active}
            />
          </TouchableOpacity>
        </View>

        {/* Lyrics */}
        <View style={styles.lyricsWrapper}>
          <View style={styles.lyricsHeader}>
            <Text style={styles.textLyricHeader}>Lyrics</Text>
            <View style={styles.maxIcon}>
              <Feather name="maximize-2" color={COLORS.active} size={23} />
            </View>
          </View>
          <View style={styles.lyricsText}></View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default MusicPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Dimensions.get('window').height * 0.065,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
  },
  playingFrom: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: COLORS.active,
  },
  titleSong: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: COLORS.active,
  },
  thumbnail: {
    width: 362,
    height: 360,
  },
  thumbnailWrapper: {
    paddingTop: 35,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  titleHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: COLORS.active,
  },
  artist: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: COLORS.active,
  },
  playingWrapper: {
    marginTop: 20,
    paddingVertical: 2,
    backgroundColor: '#3D3C38',
    borderRadius: 50,
    marginHorizontal: 15,
  },
  playingProgress: {
    paddingVertical: 2,
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: '50%',
  },
  bulletProgress: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: '49%',
  },
  timePlaying: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
  },
  textTime: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
  },
  iconsPlayingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  iconMainPlayingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -5,
  },
  lyricsWrapper: {
    backgroundColor: '#AD8C7B',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginHorizontal: 15,
    height: 500,
    marginTop: 25,
  },
  lyricsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  textLyricHeader: {
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
    fontSize: 18,
  },
  maxIcon: {
    backgroundColor: '#68544B',
    width: 44,
    height: 44,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sharingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
  },
});
