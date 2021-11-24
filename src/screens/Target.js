import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput}from 'react-native'

const Target = ({navigation}) => {
    
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
                    top: 50,
                }}
            >
                Tafe QLD Target</Text>
            <Text
                style={{
                fontSize:20,
                fontWeight:"600",
                color:'white',
                alignSelf:'center',
                position:'absolute',
                top: 120,
                }}
            >
             Our Main Focus</Text>

             <View
            style={{
                height:300,
                width:'100%',
                position:'absolute',
                top: 180,
                
            }}
            >
            <Image source={require('../img/tafe-sdg1.png')}
                    style={{width:"100%",height:"100%"}}
                />
            </View>

            <View
            style={{
                height:300,
                width:'100%',
                position:'absolute',
                top: 500,
                
            }}
            >
            <Image source={require('../img/tafe-sdg2.png')}
                    style={{width:"100%",height:"100%"}}
                />
            </View>

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



export default Target