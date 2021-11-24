import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput}from 'react-native'

const Events = ({navigation}) => {
    
    return(
        <View>
            <Image source={require('../img/background2.png')}
                style={{width:"100%",height:"100%"}}
            />
            <Text
                style={{
                    fontSize:50,
                    fontWeight:"900",
                    color:'white',
                    alignSelf:'center',
                    position:'absolute',
                    top: 40,
                }}
            >
                Tafe Events</Text>
            <Text
                style={{
                fontSize:18,
                fontWeight:"600",
                color:'white',
                alignSelf:'center',
                position:'absolute',
                top: 100,
                }}
            >
             Range of functions we have</Text>

             <TouchableOpacity 
            onPress={ () => navigation.navigate('Events') }
            style={{
                height:150,
                width:'100%',
                position:'absolute',
                top: 130,
                
            }}
            >
            <Image source={require('../img/registration.png')}
                    style={{width:"100%",height:"100%"}}
                />
            <Text                
            style={{
                    fontSize:24,
                    fontWeight:'900',
                    color:'white',
                    position:'absolute',
                    bottom: 10,
                    left: 10,
                }}>
                Registration
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Events') }
            style={{
                height:150,
                width:'100%',
                position:'absolute',
                top: 290,
                
            }}
            >
            <Image source={require('../img/upcoming.png')}
                    style={{width:"100%",height:"100%"}}
                />
            <Text                
            style={{
                    fontSize:24,
                    fontWeight:'900',
                    color:'white',
                    position:'absolute',
                    bottom: 10,
                    left: 10,
                }}>
                Up Coming Events
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Events') }
            style={{
                height:150,
                width:'100%',
                position:'absolute',
                top: 450,
                
            }}
            >
            <Image source={require('../img/fund.jpg')}
                    style={{width:"100%",height:"100%"}}
                />
            <Text                
            style={{
                    fontSize:24,
                    fontWeight:'900',
                    color:'white',
                    position:'absolute',
                    bottom: 10,
                    left: 10,
                }}>
                Fund Raisers
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Events') }
            style={{
                height:150,
                width:'100%',
                position:'absolute',
                top: 610,
                
            }}
            >
            <Image source={require('../img/student-room.jpg')}
                    style={{width:"100%",height:"100%"}}
                />
            <Text                
            style={{
                    fontSize:24,
                    fontWeight:'900',
                    color:'white',
                    position:'absolute',
                    bottom: 10,
                    left: 10,
                }}>
                Student Room Booking
            </Text>
            </TouchableOpacity>
            
            <View style={{
            backgroundColor:'black',
            position:'absolute',
            bottom:0,
            height:50,
            width:'100%'
        }}>
            <TouchableOpacity style={{
                position:'absolute',
                top:5,
                left:50,
                height:30,
                width:30,
            }}
            onPress={ () => navigation.navigate('User') }
            >
            <Image source={require('../img/userlogo.png')}
                style={{width:"100%",height:"100%"}}
            />
            </TouchableOpacity>

            <TouchableOpacity  style={{
                position:'absolute',
                top:5,
                left:180,
                height:30,
                width:30,
            }}
            onPress={ () => navigation.navigate('Main') }>
            <Image source={require('../img/homelogo.png')}
                style={{width:"100%",height:"100%"}}
            />
                
            </TouchableOpacity>

            <TouchableOpacity style={{
                position:'absolute',
                top:5,
                left:300,
                height:30,
                width:30,
            }}
            onPress={ () => Linking.openURL("https://tafeqld.edu.au/") }>
            <Image source={require('../img/tafe-logo.png')}
                style={{width:"100%",height:"100%"}}
            />
            
            </TouchableOpacity>

        </View>
        </View>
    )
}



export default Events