import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {
  flyKis,
  leaf,
  coding,
  selfie,
  mobileWalk,
  nightView,
} from '../Common/images';
interface Props {
  title: String;
  desc: String;
  tag: Number;
  hideSearch: (tag: Number) => void;
}

const SearchListItem: FC<Props> = ({item, hideSearch}) => {
  let videoThumbnail = flyKis;
  const {title, desc, tag} = item;
  switch (tag) {
    case 1:
      videoThumbnail = leaf;
      break;
    case 2:
      videoThumbnail = coding;
      break;
    case 3:
      videoThumbnail = selfie;
      break;
    case 4:
      videoThumbnail = mobileWalk;
      break;
    case 5:
      videoThumbnail = nightView;
      break;
  }
  return (
    <View style={styles.rootContainerStyle}>
      <Pressable
        onPress={() => hideSearch(tag)}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.innerItemStyle}>
          <Image source={videoThumbnail} style={styles.thumbImgStyle} />
          <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={[styles.textStyle, {fontSize: 19}]}>{desc}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SearchListItem;
const styles = StyleSheet.create({
  rootContainerStyle: {
    margin: 5,
    flex: 1,
  },
  textContainerStyle: {
    marginHorizontal: 20,
  },
  thumbImgStyle: {
    width: 40,
    height: 60,
    borderRadius: 3,
  },
  innerItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  textStyle: {
    marginRight: 20,
    fontSize: 24,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
});
