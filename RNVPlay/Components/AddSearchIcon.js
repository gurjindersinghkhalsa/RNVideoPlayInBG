import React from 'react';
import {View, StyleSheet, Pressable, Image} from 'react-native';

function AddSearchIcon({showSeachView}) {
  return (
    <View style={styles.searchContainerStyle}>
      <Pressable onPress={showSeachView}>
        <Image
          source={require('../Image/search.png')}
          style={styles.searchStyle}
        />
      </Pressable>
    </View>
  );
}
export default AddSearchIcon;
const styles = StyleSheet.create({
  searchStyle: {
    width: 40,
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  searchContainerStyle: {
    width: '100%',
    height: 60,
    marginTop: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
