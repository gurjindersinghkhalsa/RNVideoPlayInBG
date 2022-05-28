import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import {
  fyingk,
  leaf,
  coding,
  mobileWalk,
  nightView,
  selfie,
} from '../Common/vidoes';
const {height} = Dimensions.get('window');

interface Props {
  source: Int;
}

const PlayVideo: FC<Props> = ({source}) => {
  let videoSource = fyingk;
  switch (source) {
    case 1:
      videoSource = leaf;
      break;
    case 2:
      videoSource = coding;
      break;
    case 3:
      videoSource = selfie;
      break;
    case 4:
      videoSource = mobileWalk;
      break;
    case 5:
      videoSource = nightView;
      break;
  }

  return (
    <Video
      source={videoSource}
      style={styles.backgroundVideo}
      muted={false}
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
