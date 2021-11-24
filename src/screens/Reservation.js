import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput,Button}from 'react-native'

const Reservation = ({navigation}) => {
    
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
                Reservation</Text>
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
             Relax and enjoy your time with us</Text>

             <View style={{
                width:"100%",
                height:"80%",
                position:'absolute',
                top: 160,
                backgroundColor:"#69BF8D",
                borderRadius:20,
                alignItems:'center'
            }}>
                
                <Text 
                style={{color:"white",fontSize:40,marginTop:10}}>
                    TAFE ROBINA
                </Text>
                <Text 
                style={{color:"white",fontSize:20}}>
                    Robina Town Centre
                </Text>

                <Text 
                style={{color:"white",fontSize:20,fontWeight:'bold',position:'absolute',left:30,top:110}}>
                    Date
                </Text>
                <TouchableOpacity style={{
                    backgroundColor:'white',
                    position:'absolute',
                    top:100,
                    left:120,
                    height:40,
                    width: 200,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:10
                }}>
                    <Text style={{fontSize:18,color:'darkgreen',}}>26 Nov, Fri</Text>
                </TouchableOpacity>

                <Text 
                style={{color:"white",fontSize:20,fontWeight:'bold',position:'absolute',left:30,top:210}}>
                    Time
                </Text>
                <TouchableOpacity style={{
                    backgroundColor:'white',
                    position:'absolute',
                    top:200,
                    left:120,
                    height:40,
                    width: 200,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:10
                }}>
                    <Text style={{fontSize:18,color:'darkgreen',}}>00:00</Text>
                </TouchableOpacity>


                <Text 
                style={{color:"white",fontSize:20,fontWeight:'bold',position:'absolute',left:30,top:310}}>
                    Guests
                </Text>

                <View style={{
                    height:40,
                    width:40,
                    backgroundColor:'darkgrey',
                    position:'absolute',
                    top:300,
                    left:120,
                    borderRadius:10
                }}>
                     <Button title='-' />
                </View>
                
                <View style={{
                    
                        height:40,
                        width:40,
                        backgroundColor:'darkgrey',
                        position:'absolute',
                        top:300,
                        left:280,
                        borderRadius: 10
                }}>
                    <Button title='+' />
                </View>
                <TouchableOpacity style={{
                    backgroundColor:'white',
                    position:'absolute',
                    top:300,
                    left:170,
                    height:40,
                    width: 100,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:10
                }}>
                    <Text style={{fontSize:18,color:'darkgreen',}}>12</Text>
                </TouchableOpacity>
                
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



export default Reservation