import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput}from 'react-native'
//import {SketchOutlined} from  '@ant-design/icons'
import { ProgressBar, Colors } from 'react-native-paper';
const Loyalty = ({navigation}) => {
    
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
                Loyalty</Text>
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
             Save points to receive discounts</Text>
             <View style={{
                width:"100%",
                height:"12%",
                position:'absolute',
                top: 160,
                backgroundColor:"#69BF8D",
                borderRadius:20,
                alignItems:'center',
            }}>
                
                <Text 
                style={{color:"white",fontSize:20,fontWeight:'900',marginTop:10}}>
                    TAFE REWARD
                </Text>

                <Text 
                style={{color:"white",fontSize:24, fontWeight:'bold',margin:20}}>
                    0 points
                </Text>
                <View><ProgressBar progress={0.21} color={Colors.red800} /></View>
                
            </View>
            <View style={{
                width:"100%",
                height:"60%",
                position:'absolute',
                top: 300,
                backgroundColor:"#69BF8D",
                borderRadius:40,
            }}>
                <Text 
                style={{color:"white",fontSize:16, fontWeight:'bold', position:'absolute',left:50, top: 20}}>
                    Rewards(3)
                </Text>

                <Text 
                style={{color:"white",fontSize:16, fontWeight:'bold', position:'absolute',left:280, top: 20}}>
                    History
                </Text>

                <View style={{
                width:50,
                height:80,
                position:'absolute',
                top: 100,
                left:50,
                backgroundColor:"lightgrey",
                borderRadius:10,
            }}>
                <Text 
                style={{width:300,color:"white",fontSize:16, position:'absolute',left:70, top: 10}}>
                    To be decided what to place
                </Text>
                </View>

                <View style={{
                width:50,
                height:80,
                position:'absolute',
                top: 200,
                left:50,
                backgroundColor:"lightgrey",
                borderRadius:10,
            }}>
                <Text 
                style={{width:300,color:"white",fontSize:16, position:'absolute',left:70, top: 10}}>
                    To be decided what to place
                </Text>
                </View>

                <View style={{
                width:50,
                height:80,
                position:'absolute',
                top: 300,
                left:50,
                backgroundColor:"lightgrey",
                borderRadius:10,
            }}>
                <Text 
                style={{width:300,color:"white",fontSize:16, position:'absolute',left:70, top: 10}}>
                    To be decided what to place
                </Text>
                </View>

                <View style={{
                width:50,
                height:80,
                position:'absolute',
                top: 400,
                left:50,
                backgroundColor:"lightgrey",
                borderRadius:10,
            }}>
                <Text 
                style={{width:300,color:"white",fontSize:16, position:'absolute',left:70, top: 10}}>
                    To be decided what to place
                </Text>
                </View>

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



export default Loyalty