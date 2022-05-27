import React, {useRef, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

function VideoInfo({title, desc, tag}) {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View 
      style={{
        opacity: fadeAnim,
      }}>
      <View style={styles.videoInfoContainerStyle}>
        <Text style={styles.titleTextStyle}>{title}</Text>
        <Text style={styles.descTextStyle}>{desc}</Text>
        <Text style={styles.idTextStyle}>{tag}</Text>
      </View>
    </Animated.View>
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
    fontSize: 34,
    color: 'white',
    padding: 1,
  },
  descTextStyle: {
    fontSize: 22,
    color: 'white',
    padding: 2,
  },
  idTextStyle: {
    fontSize: 20,
    color: 'white',
    padding: 1,
  },
});
