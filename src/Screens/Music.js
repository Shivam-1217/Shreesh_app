import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import TrackPlayer, { State } from 'react-native-track-player';
import { songs } from './musicData'; // Assuming you have a songs list in musicData.js

const { width, height } = Dimensions.get('window');

const Music = ({ route }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(route.params.index);

  // Function to play or resume the current song
  const playCurrentSong = async () => {
    try {
      await TrackPlayer.skip(currentSong); // Skip to the selected song
      await TrackPlayer.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing song:', error);
    }
  };

  // Play the selected song on load
  useEffect(() => {
    const setupAndPlay = async () => {
      setCurrentSong(route.params.index);
      const currentState = await TrackPlayer.getState();
      if (currentState === State.Paused || currentState === State.Ready) {
        playCurrentSong();
      }
    };

    setupAndPlay();

    return () => {
      TrackPlayer.pause(); // Pause the music when the component unmounts
    };
  }, [route.params.index]);

  // Toggle play/pause
  const togglePlayPause = async () => {
    const currentState = await TrackPlayer.getState();
    if (currentState === State.Paused || currentState === State.Ready) {
      await TrackPlayer.play();
      setIsPlaying(true);
    } else if (currentState === State.Playing) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  // Skip to the next song
  const skipToNextSong = async () => {
    if (songs.length - 1 > currentSong) {
      setCurrentSong(currentSong + 1);
      await TrackPlayer.skipToNext();
      togglePlayPause();
    }
  };

  // Skip to the previous song
  const skipToPreviousSong = async () => {
    if (currentSong > 0) {
      setCurrentSong(currentSong - 1);
      await TrackPlayer.skipToPrevious();
      togglePlayPause();
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Song Cover Images */}
      <FlatList
        horizontal
        pagingEnabled
        data={songs}
        renderItem={({ item }) => (
          <View style={{ width, justifyContent: 'center', alignItems: 'center', height: height / 2, borderRadius: 10 }}>
            <Image source={item.image} style={{ borderRadius: 10, width: 300, height: 300 }} />
          </View>
        )}
        keyExtractor={(item) => item.title}
      />

      {/* Song Title and Artist */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: 'red' }}>
          {songs[currentSong].title}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '700', color: 'red' }}>
          {songs[currentSong].artist}
        </Text>
      </View>

      {/* Controls */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity onPress={skipToPreviousSong}>
          <Image source={require('../Assets/Images/next.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlayPause}>
          <Image source={isPlaying ? require('../Assets/Images/pause.png') : require('../Assets/Images/play.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={skipToNextSong}>
          <Image source={require('../Assets/Images/next.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Music;
