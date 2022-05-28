import React, {useState, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import PlayVideo from './Components/PlayVideo';
import ShowSearch from './Components/ShowSearch';
import AddSearchIcon from './Components/AddSearchIcon';
import VideoInfo from './Components/VideoInfo';
import {VIDEOS} from './data/dummy-data';

const App: FC = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [tag, setTag] = useState(0);

  function searchBegin() {
    setIsSearch(true);
  }

  const hideSearch = tag => {
    setIsSearch(false);
    setTag(tag);
  };

  return (
    <View style={styles.rootContainerStyle}>
      <PlayVideo source={tag} />
      <AddSearchIcon showSeachView={searchBegin} />
      {isSearch ? 
        <ShowSearch showModal={true} dismissSearch={hideSearch} data={VIDEOS} />
       : 
        <VideoInfo
          title={VIDEOS[tag].title}
          desc={VIDEOS[tag].desc}
          tag={VIDEOS[tag].tag}
        />
      }
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
