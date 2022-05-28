import React, {useState, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import PlayVideo from './Components/PlayVideo';
import ShowSearch from './Components/ShowSearch';
import AddSearchIcon from './Components/AddSearchIcon';
import VideoInfo from './Components/VideoInfo';
import {VIDEOS} from './data/dummy-data';

const App: FC<{isSearchListView?: Boolean, playingVideoTag?: Number}> = ({
  isSearchListView = false,
  playingVideoTag = 0,
}) => {
  const [isSearch, setIsSearch] = useState(isSearchListView);
  const [presentVideoTag, setPresentVideoTag] = useState(playingVideoTag);

  function searchBegin() {
    setIsSearch(true);
  }

  const hideSearch = tag => {
    setIsSearch(false);
    setPresentVideoTag(tag);
  };

  return (
    <View style={styles.rootContainerStyle}>
      <PlayVideo source={presentVideoTag} />
      <AddSearchIcon showSeachView={searchBegin} />
      {isSearch ? (
        <ShowSearch showModal={true} dismissSearch={hideSearch} data={VIDEOS} />
      ) : (
        <VideoInfo
          title={VIDEOS[presentVideoTag].title}
          desc={VIDEOS[presentVideoTag].desc}
          tag={VIDEOS[presentVideoTag].tag}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
