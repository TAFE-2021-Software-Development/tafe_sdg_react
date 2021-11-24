import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput}from 'react-native'


const Register = ({navigation}) => {
    
    return(
        <View>
            <Image source={require('../img/background2.png')}
                style={{width:"100%",height:"100%"}}
            />
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}} />
            <Text
                style={{
                    fontSize:60,
                    fontWeight:"900",
                    color:'white',
                    alignSelf:'center',
                    position:'absolute',
                    top: 100,
                }}
            >
                Register</Text>
            <Text
                style={{
                fontSize:20,
                fontWeight:"600",
                color:'white',
                alignSelf:'center',
                position:'absolute',
                top: 170,
                }}
            >
             Create your new account</Text>
            
             <View 
                style={{
                backgroundColor:'#2C946E',
                width:'100%',
                height:'70%',
                position:'absolute',
                top: 250,
                borderRadius:56,
                }}>

             <View style={{
                backgroundColor:"white",
                alignSelf:'center',
                borderRadius:15,
                position:'absolute',
                top: 50,
             }}>
                 <TextInput
                    style={{
                        height: 40,
                        width:300,
                        padding:10,
                        color:'#00716F',
                    }}
                    placeholder="First Name"
                />
             </View>
  
                <View style={{
                backgroundColor:"white",
                alignSelf:'center',
                borderRadius:15,
                position:'absolute',
                top: 120,
                }}>
                    <TextInput
                        style={{
                            height: 40,
                            width:300,
                            padding:10,
                            color:'#00716F',
                        }}
                        placeholder="Last Name"
                    />
                </View>

                <View style={{
                      backgroundColor:"white",
                      alignSelf:'center',
                      borderRadius:15,
                      position:'absolute',
                      top: 190,
                }}>
                    <TextInput
                        style={{
                            height: 40,
                            width:300,
                            padding:10,
                            color:'#00716F',
                        }}
                        placeholder="Email"
                    />
                </View>

                <View style={{
                backgroundColor:"white",
                alignSelf:'center',
                borderRadius:15,
                position:'absolute',
                top: 260,
                }}>
                    <TextInput
                        style={{
                            height: 40,
                            width:300,
                            padding:10,
                            color:'#00716F',
                        }}
                        placeholder="Password"
                    />
                </View>
                
                <View style={{
                backgroundColor:"white",
                alignSelf:'center',
                borderRadius:15,
                position:'absolute',
                top: 330,
                }}>
                    <TextInput
                        style={{
                            height: 40,
                            width:300,
                            padding:10,
                            color:'#00716F',
                        }}
                        placeholder="Confirm Password"
                    />
                </View>
                
    

                <TouchableOpacity 
                onPress={ () => navigation.navigate('Main') }
                style={{
                    paddingHorizontal:120,
                    paddingVertical:10,
                    alignSelf:'center',
                    backgroundColor:"white",
                    borderRadius:15,
                    position:'absolute',
                    bottom: 100,
                }}>
                    <Text 
                    
                    style={{color:"#00716F",fontSize:20}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <Text
                    onPress={ () => navigation.navigate('Register') }
                    style={{
                        fontSize:16,
                        fontWeight:"300",
                        color:'white',
                        alignSelf:'center',
                        position:'absolute',
                        bottom: 50,
                    }}
                    onPress={ () => navigation.navigate('Login') }
                >
                    Already have an account? Login</Text>
                </View>
        </View>
    )
}



export default Register