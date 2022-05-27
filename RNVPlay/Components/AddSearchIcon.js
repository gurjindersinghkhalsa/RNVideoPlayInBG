import React from 'react';
import {View, StyleSheet, Pressable, Image} from 'react-native';
import { style } from '../Common/styles';

function AddSearchIcon({showSeachView}) {
  return (
    <View style={styles.searchContainerStyle}>
      <Pressable onPress={showSeachView}>
        <Image
          source={require('../Image/search.png')}
          style={style.searchIconStyle}
        />
      </Pressable>
    </View>
  );
}
export default AddSearchIcon;
const styles = StyleSheet.create({
  searchContainerStyle: {
    width: '100%',
    height: 60,
    marginTop: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
