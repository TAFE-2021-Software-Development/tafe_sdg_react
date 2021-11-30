import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import * as theEvent from '../components/event';

const UpComingEvent = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../img/background2.png')}
        style={{width: '100%', height: '100%'}}
      />
      <Text
        style={{
          fontSize: 50,
          fontWeight: '500',
          color: 'white',
          alignSelf: 'center',
          position: 'absolute',
          top: 50,
        }}>
        Upcoming Events
      </Text>

      <SafeAreaView
        style={{
          flex: 1,
          position: 'absolute',
          top: 150,
          paddingTop: StatusBar.currentHeight,
          width: '100%',
        }}>
        <ScrollView
          style={{backgroundColor: 'lightgrey', marginHorizontal: 20}}>
          {theEvent.eventCardList}
        </ScrollView>
      </SafeAreaView>

      <View
        style={{
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 0,
          height: 50,
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 5,
            left: 50,
            height: 30,
            width: 30,
          }}
          onPress={() => navigation.navigate('User')}>
          <Image
            source={require('../img/userlogo.png')}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 5,
            left: 180,
            height: 30,
            width: 30,
          }}
          onPress={() => navigation.navigate('Main')}>
          <Image
            source={require('../img/homelogo.png')}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 5,
            left: 300,
            height: 30,
            width: 30,
          }}
          onPress={() => Linking.openURL('https://tafeqld.edu.au/')}>
          <Image
            source={require('../img/tafe-logo.png')}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpComingEvent;
