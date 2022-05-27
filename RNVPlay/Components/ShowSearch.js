import React, {useState} from 'react';
import {
  Modal,
  View,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import SearchListItem from './SearchListItem';

const ShowSearch = ({showModal, dismissSearch, data}) => {

  const [searchVal, setsearchVal] = useState('');
  const [masterData, setmasterData] = useState(data);
  const filterData = data
  const hideSearch = index => {
    dismissSearch(index);
  };

  const ListItem = ({item}) => {
    return <SearchListItem item={item} hideSearch={hideSearch}/>
  };

  const filterVideoList = text => {
    setsearchVal(text);
    if (text) {
      const matchedData = filterData.filter(item => {
        const title = item.title ? item.title.toUpperCase() : '';
        const desc = item.desc ? item.desc.toUpperCase() : '';
        const tag = item.tag.toString() ? item.tag.toString() : '';
        return (
          title.indexOf(text.toUpperCase()) > -1 ||
          desc.indexOf(text.toUpperCase()) > -1 ||
          tag.indexOf(text) > -1
        );
      });
      setmasterData(matchedData);
    } else {
      setmasterData(data);
    }
  };

  const SeperatorView = () => {
    return <View style={style.seperateViewStyle} />;
  };

  return (
    <Modal animationType={'slide'} transparent={true} visible={showModal}>
      <View style={style.rootContainerStyle}>

        <View style={style.rootItemsContainerStyle}>
         
          <View style={style.inputContainerStyle}>
            <TextInput
              vale={searchVal}
              placeholder="Type here..."
              style={style.textInputStyle}
              onChangeText={filterVideoList}
            />

            <Image
              source={require('../Image/search.png')}
              style={style.searchIconStyle}
            />
          </View>

          <FlatList
            data={masterData}
            ItemSeparatorComponent={SeperatorView}
            renderItem={ListItem}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ShowSearch;

const style = StyleSheet.create({
  seperateViewStyle: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
  rootContainerStyle: {
    flex: 1,
  },
  rootItemsContainerStyle: {
    backgroundColor: 'white',
  },
  textInputStyle: {
    height: 40, 
    fontSize: 20, 
    width: '80%', 
    margin: 10
  },
  inputContainerStyle: {
    marginTop: 50,
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchIconStyle: {
    width: 30, 
    height: 30,
    margin: 15
  }
});
