import {Songs} from '../Songs/Songs';

const Playlists = [
  {
    id: 1,
    likes: 191165,
    name: 'when boring',
    hours: 3,
    minutes: 45,
    cover: require('../../images/songs/wonder.jpeg'),
    songs: [
      {
        id: 1,
        title: 'Alone',
        artist: 'Alan Walker',
        category: 'Song',
        duration: '2.43',
        image: require('../../images/songs/alone.png'),
      },
      {
        id: 2,
        title: 'Let Me Love You',
        artist: 'Justin Bieber feat DJ Snake',
        category: 'Song',
        duration: '3.15',
        image: require('../../images/songs/let-me-love-you.png'),
      },
      {
        id: 3,
        title: 'Ignite',
        artist: 'Alan Walker',
        category: 'Song',
        duration: '2.45',
        image: require('../../images/songs/ignite.png'),
      },
      {
        id: 4,
        title: 'Taki Taki',
        artist: 'DJ Snake feat Selena Gomez',
        category: 'Song',
        duration: '3.05',
        image: require('../../images/songs/taki-taki.png'),
      },
      {
        id: 5,
        title: 'Believer',
        artist: 'Imagine Dragon',
        category: 'Song',
        duration: '4.00',
        image: require('../../images/songs/believer.png'),
      },
    ],
    descriptions:
      'Tune in to Top Tracks from Imagine Dragons, Alan Walker and many more',
  },
  {
    id: 2,
    likes: 18974,
    name: 'chills',
    hours: 2,
    minutes: 30,
    cover: require('../../images/songs/move-on-up.jpeg'),
    songs: Songs,
    descriptions:
      "Tune in to Top Tracks from Joji, Kehlani and many more. Don't forget to stay chill 🥶",
  },
];

export {Playlists};
