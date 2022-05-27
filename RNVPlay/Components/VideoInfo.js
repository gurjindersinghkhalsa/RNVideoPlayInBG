import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function VideoInfo({title, desc, tag}) {
  return (
    <View style={styles.videoInfoContainerStyle}>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <Text style={styles.descTextStyle}>{desc}</Text>
      <Text style={styles.idTextStyle}>{tag}</Text>
    </View>
  );
}
export default VideoInfo;
const styles = StyleSheet.create({
  videoInfoContainerStyle: {
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 20,
  },
  titleTextStyle: {
    fontSize: 40,
    color: 'white',
    padding: 1,
  },
  descTextStyle: {
    fontSize: 30,
    color: 'white',
    padding: 2,
  },
  idTextStyle: {
    fontSize: 20,
    color: 'white',
    padding: 1,
  },
});
