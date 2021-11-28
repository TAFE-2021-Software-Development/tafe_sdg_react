import React from 'react';
import axios from 'axios';

function eventData(id, name, max, description, location, image) {
  this.id = id;
  this.name = name;
  this.max = max;
  this.description = description;
  this.location = location;
  this.image = image;
}

export var eventList = [
  new eventData(
    1,
    'Event 1',
    10,
    'This is the first event',
    'TAFE Coomera campus',
    'https://yaeyx.com/images/1609311579097.jpg',
  ),
  new eventData(
    2,
    'Event 2',
    10,
    'TAFE Southport campus',
    'Location 1',
    'https://yaeyx.com/images/1609311579097.jpg',
  ),
];
