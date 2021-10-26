import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';

// HomeScreen
//? Just a hook that render components for to be shown in Temporary Home Screen
function TemporaryHomeScreen() {
  return (
    <View style={styles.container}>
      <HomeButton title="cafe screen"></HomeButton>
      <HomeButton title="reward or challange screen"></HomeButton>
    </View>
  );
}

// HomeButton
//? As navigator component for routing.
//? Required parameter title, and onPress.
const HomeButton = ({title}) => (
  <Pressable
    style={styles.button}
    onPress={() => Alert.alert(`Pressed ${title}`)}>
    <Text style={{color: 'white'}}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'salmon',
  },
  button: {
    marginTop: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});

export default TemporaryHomeScreen;
