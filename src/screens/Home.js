import React from "react";
import {TouchableOpacity,Text,View,Image} from 'react-native'

const Home = ({navigation}) => {
    return(
        <View>
            <Image source={require('../img/home.jpg')}
                style={{width:"100%",height:"100%"}}
            />
            <Text
                style={{
                    fontSize:56,
                    fontWeight:"900",
                    color:'white',
                    alignSelf:'center',
                    position:'absolute',
                    top: 200,

                }}
            >
                TAFE ROBINA</Text>
            <TouchableOpacity
            onPress={ () => navigation.navigate('Login') }

            style={{
                paddingHorizontal:100,
                paddingVertical:10,
                alignSelf:'center',
                backgroundColor:"#00716F",
                borderRadius:20,
                position:'absolute',
                bottom: 200,
            }}>
                <Text 
                
                style={{color:"white",fontSize:20,fontWeight:'bold'}}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Register') }
            style={{
                paddingHorizontal:100,
                paddingVertical:10,
                alignSelf:'center',
                backgroundColor:"white",
                borderRadius:20,
                position:'absolute',
                bottom: 130,
            }}>
                <Text 
                
                style={{color:"#00716F",fontSize:20,fontWeight:'bold'}}>
                    Sign Up
                </Text>
            </TouchableOpacity>
     
            
        </View>
    )
}



export default Home