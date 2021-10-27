import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCoffee,
  faAd,
  faSearch,
  faList,
} from '@fortawesome/free-solid-svg-icons';

function ListMenu() {
  return (
    <SafeAreaView style={{marginHorizontal: 20, flex: 1}}>
      <View style={styles.topBar}>
        <View>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>Cafe Menu</Text>
        </View>
        <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
      </View>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} />
        <TextInput
          placeholder="Search menu item"
          style={{marginStart: 15}}></TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    marginTop: 20,
    paddingStart: 15,
    height: 50,
    backgroundColor: 'lavender',
    borderRadius: 10,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ListMenu;
