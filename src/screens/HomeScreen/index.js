import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../utils/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Artist1, Artist2, Songs, Tops} from '../../assets';

Feather.loadFont(); // settings
Octicons.loadFont(); // history
Ionicons.loadFont(); // notifications-outline

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#484C4D', '#121212', '#121212']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Made For you</Text>
          <View style={styles.iconWrapper}>
            <View style={styles.icon}>
              <TouchableOpacity>
                <Ionicons
                  name="notifications-outline"
                  size={27}
                  color={COLORS.active}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.icon}>
              <Octicons name="history" size={22} color={COLORS.active} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Feather name="settings" size={25} color={COLORS.active} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Made For You */}
        <View style={styles.madeForYouWrapper}>
          <View style={styles.cardMadeForYouWrapper}>
            <Image style={styles.img} source={Artist1} />
            <Text style={styles.artistsName}>
              Joji, Ed Sheeran, Katy Perry, Ariana and more
            </Text>
          </View>
          <View style={styles.cardMadeForYouWrapper}>
            <Image style={styles.img} source={Artist2} />
            <Text style={styles.artistsName}>
              Catch the Latest Playlist made just for you
            </Text>
          </View>
        </View>

        {/* Trending Now */}
        <Text style={styles.header}>Trending Now</Text>
        <View
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.madeForYouWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Songs.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('MusicPlayerScreen', {item: item})
                }
                style={styles.cardTrendingWrapper}>
                <Image style={styles.img} source={item.image} />
                <Text style={styles.titleSong}>{item.title}</Text>
                <Text style={styles.descSong}>
                  {item.category} . {item.artist}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Trending Now */}
        <Text style={styles.header}>Top Picks for You</Text>
        <View
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.madeForYouWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Tops.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('MusicPlayerScreen', {item: item})
                }
                style={styles.cardTrendingWrapper}>
                <Image style={styles.img} source={item.image} />
                <Text style={styles.titleSong}>{item.title}</Text>
                <Text style={styles.descSong}>
                  {item.category} . {item.artist}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  header: {
    fontSize: 25,
    color: COLORS.active,
    marginHorizontal: 15,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Dimensions.get('window').height * 0.095,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * -0.023,
  },
  icon: {
    marginRight: 20,
  },
  madeForYouWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 50,
    justifyContent: 'space-between',
  },
  img: {
    width: 170,
    height: 172,
  },
  cardMadeForYouWrapper: {
    flexDirection: 'column',
    marginRight: 20,
    width: 170,
  },
  artistsName: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.text,
    fontSize: 13,
    textAlign: 'justify',
    paddingTop: 10,
  },
  cardTrendingWrapper: {
    flexDirection: 'column',
    marginRight: 20,
    width: 170,
  },
  titleSong: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.text,
    marginTop: 15,
  },
  descSong: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.text,
    fontSize: 13,
    textAlign: 'justify',
    paddingTop: 5,
  },
});
