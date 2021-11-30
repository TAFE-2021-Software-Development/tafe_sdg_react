import React from 'react';
import axios from 'axios';
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

function eventData(id, name, max, description, location, image) {
  this.id = id;
  this.name = name;
  this.max = max;
  this.description = description;
  this.location = location;
  this.image = image;
}

async function fetchDataFromApi() {
  try {
    const response = await axios.get('http://3.16.123.62/api/events/all/');
    const finalResponse = response.data;
    for (var i = 0; i < finalResponse.length; i++) {
      //   console.log(`Event name= ${finalResponse[i].name}`);
      eventList.push(
        new eventData(
          finalResponse[i].id,
          finalResponse[i].name,
          finalResponse[i].maxAttendees,
          finalResponse[i].description,
          finalResponse[i].location,
          finalResponse[i].imageLink,
        ),
      );
    }
    // console.log('eventList');
    // console.log(eventList);
    // console.log('eventList');
    return await finalResponse;
  } catch (error) {
    console.error(error);
    return await error;
  }
}

export function initState() {
  doEverything();
  // setInterval(doEverything, 5000);
}

function doEverything() {
  fetchDataFromApi();
  assignValue();
}

var eventList = [];

export var eventCardList = [];

function assignValue() {
  for (var i = 0; i < eventList.length; i++) {
    eventCardList.push(
      eventCard(
        eventList[i].id,
        eventList[i].name,
        eventList[i].max,
        eventList[i].description,
        eventList[i].location,
        eventList[i].image,
      ),
    );
  }
}

function eventCard(id, name, max, description, location, image) {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Text style={{marginBottom: 10}}>{description}</Text>
      <Card.Image
        source={{uri: `${image}`}}
        style={{height: 100, marginBottom: 10}}
      />

      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="More Info"
      />
    </Card>
  );
}
