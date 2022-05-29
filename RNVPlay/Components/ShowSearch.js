import React, {useState} from 'react';
import {
  Modal,
  View,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  Text,
} from 'react-native';
import {style} from '../Common/styles';
import SearchListItem from './SearchListItem';

interface Props {
  showModal: Boolean;
  dismissSearch: () => void;
  data: VIDEOS;
  textInputVal: String;
}
const ShowSearch: FC<Props> = (
  {showModal, dismissSearch, data},
  textInputVal = '',
) => {
  const [searchVal, setsearchVal] = useState(textInputVal);
  const [masterData, setmasterData] = useState(data);
  const filterData = data;

  const hideSearch = index => {
    console.log('hide search', index)
    dismissSearch(index);
  };

  const ListItem = ({item}) => {
    return <SearchListItem item={item} hideSearch={hideSearch} />;
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
    return <View style={styles.seperateViewStyle} />;
  };

  return (
    <Modal animationType={'slide'} transparent={true} visible={showModal}>
      <View style={styles.rootContainerStyle}>
        <View style={styles.rootItemsContainerStyle}>
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
          <SeperatorView />
          {masterData.length ? (
            <FlatList
              data={masterData}
              keyExtractor={item => item.tag}
              ItemSeparatorComponent={SeperatorView}
              renderItem={ListItem}
            />
          ) : (
            <View style={style.emptyViewStyle}>
              <Text style={style.emptyTextStyle}>
                No result found with '{searchVal}'
              </Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ShowSearch;

const styles = StyleSheet.create({
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
    flex: 1,
  },
});
