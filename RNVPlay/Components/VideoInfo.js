import React, {useRef, useEffect} from 'react';
import {Text, View, Animated} from 'react-native';
import {style} from '../Common/styles';

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
      <View style={style.videoInfoContainerStyle}>
        <Text style={style.videoTextStyle}>{title}</Text>
        <Text style={[style.videoTextStyle, {fontSize: 22}]}>{desc}</Text>
        <Text style={[style.videoTextStyle, {fontSize: 20}]}>{tag}</Text>
      </View>
    </Animated.View>
  );
}
export default VideoInfo;

