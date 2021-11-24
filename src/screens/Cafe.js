import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput}from 'react-native'

const Cafe = ({navigation}) => {
    
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
                Cafe Menu</Text>
            <Text
                style={{
                fontSize:16,
                fontWeight:"600",
                color:'white',
                alignSelf:'center',
                position:'absolute',
                top: 100,
                }}
            >
             Enjoy a delicious selection of food</Text>
             <TouchableOpacity 
            onPress={ () => navigation.navigate('Main') }
            style={{
                height:'100%',
                width:'100%',
                position:'absolute',
                top: 140,
                
            }}
            >
            <Image source={require('../img/lunch.jpg')}
                    style={{width:"100%",height:"18%"}}
                />
            <Text                
            style={{
                    fontSize:24,
                    fontWeight:'900',
                    color:'white',
                    position:'absolute',
                    top: 110,
                    left: 10,
                }}>
                Lunch
            </Text>
            </TouchableOpacity>

             <TouchableOpacity 
            onPress={ () => navigation.navigate('Main') }
            style={{
                height:'100%',
                width:'100%',
                position:'absolute',
                top: 310,
                
            }}
            >
            <Image source={require('../img/coffee.jpg')}
                    style={{width:"100%",height:"18%"}}
                />
            <Text                
            style={{
                    fontSize:24,
                    fontWeight:'900',
                    color:'white',
                    position:'absolute',
                    top: 110,
                    left: 10,
                }}>
                Drink
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Main') }
            style={{
                height:'100%',
                width:'100%',
                position:'absolute',
                top: 480,
                
            }}
            >
            <Image source={require('../img/dessert.jpg')}
                    style={{width:"100%",height:"18%"}}
                />
            <Text                
            style={{
                    fontSize:24,
                    fontWeight:'900',
                    color:'white',
                    position:'absolute',
                    top: 110,
                    left: 10,
                }}>
                Dessert
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Reservation') }
            style={{
                height:'100%',
                width:'100%',
                position:'absolute',
                top: 650,
                
            }}
            >
            <Image source={require('../img/reserve.png')}
                    style={{width:"100%",height:"18%"}}
                />
            <Text                
            style={{
                    fontSize:24,
                    fontWeight:'900',
                    color:'white',
                    position:'absolute',
                    top: 110,
                    left: 10,
                }}>
                Reservation
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



export default Cafe