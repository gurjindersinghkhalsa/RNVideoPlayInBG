import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
const {height} = Dimensions.get('window');

const PlayVideo = ({source}) => {
  let videoSource = require('../Video/FlyingKis.mp4');
  switch (source) {
    case 0:
      videoSource = require('../Video/FlyingKis.mp4');
      break;
    case 1:
      videoSource = require('../Video/greenLeafe.mp4');
      break;
    case 2:
      videoSource = require('../Video/MacbookCoding.mp4');
      break;
    case 3:
      videoSource = require('../Video/makingVideo.mp4');
      break;
    case 4:
      videoSource = require('../Video/userMobile.mp4');
      break;
    case 5:
      videoSource = require('../Video/nightView.mp4');
      break;
  }

  return (
    <Video
      source={videoSource}
      style={styles.backgroundVideo}
      muted={true}
      repeat={true}
      resizeMode={'stretch'}
      rate={1.0}
      ignoreSilentSwitch={'obey'}
    />
  );
};
export default PlayVideo;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    bottom: 0,
    right: 0,
  },
});
