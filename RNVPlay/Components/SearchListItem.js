import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

function SearchListItem({item, hideSearch}) {
  let videoThumbnail = require('../Image/kiss.png');
  switch (item.tag) {
    case 1:
      videoThumbnail = require('../Image/leafe.png');
      break;
    case 2:
      videoThumbnail = require('../Image/macbook.png');
      break;
    case 3:
      videoThumbnail = require('../Image/selfie.png');
      break;
    case 4:
      videoThumbnail = require('../Image/mobileWalk.png');
      break;
    case 5:
      videoThumbnail = require('../Image/nigtView.png');
      break;
  }
  return (
    <View style={styles.rootContainerStyle}>
      <Pressable
        onPress={() => hideSearch(item.tag)}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.innerItemStyle}>
          <Image source={videoThumbnail} style={styles.thumbStyle} />
          <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.descStyle}>{item.desc}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default SearchListItem;
const styles = StyleSheet.create({
  rootContainerStyle: {
    margin: 5,
    flex: 1,
  },
  textContainerStyle: {
    marginHorizontal: 20,
  },
  thumbStyle: {
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
    fontSize: 20,
    marginVertical: 5,
  },
  descStyle: {
    marginRight: 20,
    fontSize: 16,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: 'gray',
    borderRadius: 5
  },
});
