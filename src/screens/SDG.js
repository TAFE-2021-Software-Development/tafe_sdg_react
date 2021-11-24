import React from "react";
import { Linking,TouchableOpacity,Text,View,Image,TextInput}from 'react-native'


const SDG = ({navigation}) => {
    const url = 'https://sdgs.un.org/goals';
    return(
        <View>
            <Image source={require('../img/background2.png')}
                style={{width:"100%",height:"100%"}}
            />
            <Text
                style={{
                    fontSize:60,
                    fontWeight:"900",
                    color:'white',
                    alignSelf:'center',
                    position:'absolute',
                    top: 50,
                    
                }}
            >
                SDG Goals</Text>
            <View style={{
                position:'absolute',
                top: 200,
                width:"100%",
                height:"50%",

            }}>
                <Image source={require('../img/sdg.png')}
                style={{width:"100%",height:"100%"}}
                />
            </View>


            <View style={{
                paddingHorizontal:100,
                paddingVertical:10,
                alignSelf:'center',
                backgroundColor:"#00716F",
                borderRadius:20,
                position:'absolute',
                bottom: 100,
            }}>
                <Text 
                onPress={ () => Linking.openURL("https://sdgs.un.org/goals") }
                style={{color:"white",fontSize:20,fontWeight:'bold'}}>
                    More Info
                </Text>
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



export default SDG