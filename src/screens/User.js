import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput}from 'react-native'



const User = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);
    return(
        <View>
            <Image source={require('../img/background2.png')}
                style={{width:"100%",height:"100%"}}
            />
           <View style={{
               position:'absolute',
               top:100,
               left:120,
               alignItems:'center',
               justifyContent:'center'
             
           }}>
           <Image source={require('../img/username.png')}
                style={{
                    width:150,
                    height:150,
                    borderRadius:150/2,
                    borderColor:'#00716F',
                    borderWidth:3}}
            />
            <Text style={{
                color: 'white',
                fontSize:20,
                fontWeight:'900',
                marginTop:10
            }}>Username</Text>
           </View>
           <TouchableOpacity 
            onPress={ () => navigation.navigate('Main') }
            style={{
                paddingHorizontal:50,
                paddingVertical:10,
                alignSelf:'center',
                backgroundColor:"#00716F",
                borderRadius:15,
                position:'absolute',
                bottom: 450,
            }}>
                <Text 
                onPress={ () => navigation.navigate('Main') }
                style={{color:"white",fontSize:20}}>
                    Account Information
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Main') }
            style={{
                paddingHorizontal:80,
                paddingVertical:10,
                alignSelf:'center',
                backgroundColor:"#00716F",
                borderRadius:15,
                position:'absolute',
                bottom: 360,
            }}>
                <Text 
                onPress={ () => navigation.navigate('Main') }
                style={{color:"white",fontSize:20}}>
                    Loyalty points
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Main') }
            style={{
                paddingHorizontal:100,
                paddingVertical:10,
                alignSelf:'center',
                backgroundColor:"#00716F",
                borderRadius:15,
                position:'absolute',
                bottom: 270,
            }}>
                <Text 
                onPress={ () => navigation.navigate('Home') }
                style={{color:"white",fontSize:20}}>
                    Sign Out
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



export default User