import React, {useCallback} from 'react';
import {
  Button,
  Linking,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import * as Login from './Login';

async function getTips() {
  try {
    const response = await axios.get('http://3.16.123.62/api/tip/get/');
    const finalResponse = response.data.Tip.tip;
    console.log(finalResponse);
    return await finalResponse;
  } catch (error) {
    console.error(error);
    return await error;
  }
}

async function alertHandler(navigation) {
  const response = await getTips();
  Alert.alert(
    //title
    `Today's Tip\n`,
    //body
    `${response}\n`,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: true},
  );
}

const Main = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../img/background2.png')}
        style={{width: '100%', height: '100%'}}
      />

      <Text
        style={{
          fontSize: 40,
          fontWeight: '900',
          color: 'white',
          position: 'absolute',
          top: 80,
          left: 10,
        }}>
        Hi {Login.theName}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cafe')}
        style={{
          height: 120,
          width: 100,
          borderRadius: 120 / 2,
          position: 'absolute',
          top: 150,
          left: 10,
        }}>
        <Image
          source={require('../img/Cafe.png')}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Events')}
        style={{
          height: 120,
          width: 100,
          borderRadius: 120 / 2,
          position: 'absolute',
          top: 150,
          left: 140,
        }}>
        <Image
          source={require('../img/Events.png')}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 150,
          left: 270,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Loyalty')}>
        <Image
          source={require('../img/loyalty.jpg')}
          style={{height: 105, width: 105, borderRadius: 105 / 2}}
        />
        <Text style={{color: 'white', fontSize: 14, marginTop: 1}}>
          Loyalty
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 30,
          fontWeight: '900',
          color: 'white',
          position: 'absolute',
          top: 300,
          left: 10,
        }}>
        Sustainability Goals
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Target')}
        style={{
          height: 100,
          width: 90,
          borderRadius: 100 / 2,
          backgroundColor: '#00716F',
          position: 'absolute',
          top: 350,
          left: 50,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Image
          source={require('../img/target.png')}
          style={{width: '60%', height: '60%'}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            position: 'absolute',
            top: 100,
            left: 10,
          }}>
          Tafe QLD Targets
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SDG')}
        style={{
          height: 100,
          width: 90,
          borderRadius: 100 / 2,
          backgroundColor: '#00716F',
          position: 'absolute',
          top: 350,
          left: 220,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Image
          source={require('../img/Goals.png')}
          style={{width: '100%', height: '100%'}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            position: 'absolute',
            top: 100,
            left: 10,
          }}>
          SDG Goals
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Challenge')}
        style={{
          height: 100,
          width: 90,
          borderRadius: 100 / 2,
          backgroundColor: '#00716F',
          position: 'absolute',
          top: 500,
          left: 50,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Image
          source={require('../img/Challenge.png')}
          style={{width: '80%', height: '80%'}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            position: 'absolute',
            top: 100,
            left: 10,
          }}>
          Challenge
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alertHandler();
        }}
        style={{
          height: 100,
          width: 90,
          borderRadius: 100 / 2,
          backgroundColor: '#00716F',
          position: 'absolute',
          top: 500,
          left: 220,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Image
          source={require('../img/Tips.png')}
          style={{width: '70%', height: '70%', position: 'absolute', left: 5}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            position: 'absolute',
            top: 100,
            left: 25,
          }}>
          Tips
        </Text>
      </TouchableOpacity>

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

export default Main;
