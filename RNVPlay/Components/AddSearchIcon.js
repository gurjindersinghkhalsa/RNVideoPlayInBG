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
    width: 36,
    height: 36,
    padding: 10,
    margin: 15,
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
