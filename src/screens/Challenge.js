import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput}from 'react-native'

const Challenge = ({navigation}) => {
    
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
                Challenge</Text>
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
             Take the ECO Friendly Challenge</Text>
            
            <TouchableOpacity
            onPress={ () => navigation.navigate('Main')}
            style={{
                position:'absolute',
                top: 200,
                left:10,
                height:'100%',
                width:'100%',
                borderRadius:10
                
            }}> 
            <Image source={require('../img/challenge1.png')}
                style={{width:"100%",height:"60%"}}
            />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={ () => navigation.navigate('Main') }
            style={{
                paddingHorizontal:80,
                paddingVertical:10,
                alignSelf:'center',
                backgroundColor:"white",
                borderRadius:15,
                position:'absolute',
                bottom: 100,
            }}>
                <Text 
                
                style={{color:"#00716F",fontSize:20,fontWeight:'bold'}}>
                    Reward
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



export default Challenge