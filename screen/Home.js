import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { CheckBox,  TextInput,  } from "react-native-paper";

import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from 'react-native-vector-icons';
import { Entypo } from 'react-native-vector-icons';



export const Home=()=>{
    return (
      <View> 
       
      
      <View >
      <LinearGradient colors={['#F5EFFD', '#FCF5E8']}
      start={[0, 1]}
      end={[1, 0]}
      >
      <View style={styles.navbar}>
        
      <Text style={styles.hometext}>Home</Text>
        
            <View style={styles.navbartext}>
            <View style={styles.texts}>
            <View style={styles.opacityCircle}>
            <Icon name="flash" fontSize={30} color={"skyblue"} />
            </View>
        <Text style={{fontWeight:'bold'}}>Price Alert</Text>
            </View>
            <View>
            <View style={styles.opacityCircle}>
            <Icon name='exchange' color={"orange"}/>
            </View>
             
        <Text style={{fontWeight:'bold'}}>Convert</Text>
            </View>
            <View>
            <View style={styles.opacityCircle}>
            <Feather name='copy' color={"skyblue"}/>
            </View>
             
        <Text style={{fontWeight:'bold'}}>Compare</Text>
            </View>
            <View>
            <View style={styles.opacityCircle}>
            <Entypo name='star-outlined' color={"green"}/>
            </View>
             
        <Text style={{fontWeight:'bold'}}>Watchlist</Text>
            </View>
            </View>
        
        
        
        </View>
        </LinearGradient>
      </View>

      <View style={{backgroundColor:'#F4F4F3', borderRadius:40,}}>
        <Text style={{marginTop:10,  marginBottom:10,fontSize:20, fontWeight:'bold', marginLeft:40,}}>Your Wallet</Text>
        <ScrollView horizontal={true}>
        <View style={{flexDirection:'row', display:'flex',}}>
       <View style={{flexDirection:'column', display:'flex', backgroundColor:'white', width:240, height:120, borderRadius:20,  marginLeft:30,gap:10,}}>
       <Text style={{color:'gray', marginLeft:40, marginTop:10}}>Neo</Text>
        <View style={{flexDirection:'row', display:'flex',    
        justifyContent:'space-around',}}> 
        <Text style={{fontWeight:'bold', fontSize:16,}}> NEO 0.2124</Text>
        <View style={{ width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#D1EECA',
        alignItems: 'center',
        justifyContent: 'center',}}>
        <Entypo name='star-outlined' color={'#75C285'}  style={{fontSize:20}}/>
        </View>
        
        </View>

        <View style={{flexDirection:'row', display:'flex',    
        justifyContent:'space-around', marginBottom:40, marginHorizontal:13, }}>
        <Text style={{fontWeight:'bold', fontSize:18,}}>$32,128.80</Text>
        <View style={{flexDirection:'row', display:'flex',    
        }}>
        <Icon name='angle-down' style={{color:'red'}}/>
        <Text style={{color:'grey', fontSize:14,}}>2.5%</Text>
        </View>
        
        </View>

        </View>

        <View style={{flexDirection:'column', display:'flex', backgroundColor:'white', width:240, height:120, borderRadius:20,  marginLeft:30,gap:10,}}>
       <Text style={{color:'gray', marginLeft:40, marginTop:10}}>Neo</Text>
        <View style={{flexDirection:'row', display:'flex',    
        justifyContent:'space-around',}}> 
        <Text style={{fontWeight:'bold', fontSize:16,}}> NEO 0.2124</Text>
        <Entypo name='star-outlined' color={'green'} style={{backgroundColor:'green'}}/>
        </View>

        <View style={{flexDirection:'row', display:'flex',    
        justifyContent:'space-around', marginBottom:40, marginHorizontal:13, }}>
        <Text style={{fontWeight:'bold', fontSize:18,}}>$32,128.80</Text>
        <View style={{flexDirection:'row', display:'flex',    
        }}>
        <Icon name='angle-down' style={{color:'red'}}/>
        <Text style={{color:'grey', fontSize:14,}}>2.5%</Text>
        </View>
        
        </View>

        </View>
        </View>
        </ScrollView>

    

        <Text style={{marginTop:10,  marginBottom:20,fontSize:20, fontWeight:'bold', marginLeft:40,}}>Trending</Text>
        <View >

            <View  style={{flexDirection:'row', display:'flex', width:240, height:120, borderRadius:20,  marginLeft:30,gap:10,}}>
                <View style={{width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFE3C3',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,}}>
                    <Icon name='bitcoin' style={{fontSize:20, color:'#F6A24D'}}/>
                </View>
                <View style={{flexDirection:'column', display:'flex'}}>
                    
               <View  style={{flexDirection:'row', display:'flex', marginBottom:20,gap:100}}>
               <Text style={{fontSize:20, fontWeight:'bold'}}>Bitcoin</Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>$32,128.80</Text>   
               </View>  
            
            <View  style={{flexDirection:'row', display:'flex', marginBottom:10,gap:194}}>
                
                <Text style={{fontSize:18, color:'#ABACB7'}}>BTC</Text>
                <View style={{flexDirection:'row', display:'flex',    
        }}>
                <Icon name='angle-down'/>
                <Text style={{color:'#A3A3AF', fontSize:16}}>2.5%</Text>
                </View>
                </View>
                </View>
            </View>




            <View  style={{flexDirection:'row', display:'flex', width:240, height:120, borderRadius:20,  marginLeft:30,gap:10,}}>
                <View style={{width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FDE6EF',
        alignItems: 'center',
        fontSize:20,
        justifyContent: 'center',
        marginRight: 10,}}>
                    <Icon name='bitcoin' style={{fontSize:20, color:'#F56EA5'}}/>
                </View>
                <View style={{flexDirection:'column', display:'flex'}}>
                    
               <View  style={{flexDirection:'row', display:'flex', marginBottom:20,gap:88}}>
               <Text style={{fontSize:20, fontWeight:'bold'}}>Bytecoin</Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>$32,128.80</Text>   
               </View>  
            
            <View  style={{flexDirection:'row', display:'flex',gap:194}}>
                
                <Text  style={{fontSize:18, color:'#ABACB7'}}>BTC</Text>
                <View style={{flexDirection:'row', display:'flex',    
        }}>
                <Icon name='angle-down'/>
                <Text style={{color:'#A3A3AF', fontSize:16}}>2.5%</Text>
                </View>
                </View>
                </View>
            </View>
            <View style={styles.socialicon}>
      
      <Icon name='user'/>
      <Icon name='user'/>
      <Icon name='user'/>
      <Icon name='user'/>
     </View>
        </View>
       
      
      </View>
      


     
  

      
      


      
      </View>
    );

    
}

const styles = StyleSheet.create({

navbar:{
   flexDirection:'column',
   display:'flex',
   
   height:180,

    

},

    hometext:{
         marginBottom:20,
        fontSize:30,
        fontWeight:'bold',
        marginLeft:34,
    },


     navbartext:{
        flexDirection:'row',
        display:'flex',    
        justifyContent:'space-around',
     },

     texts:{
      marginLeft:20,
     },
    icons:{
        Color:'white'
    },


    opacityCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        
      },
      footer:{
      
      },
      socialicon:{
        backgroundColor:'white',
        width:50,
        height:50,
        borderRadius:40,
        paddingBottom:10,
        paddingTop:10,
        paddingLeft:12,
        flexDirection:'row',
        display:'flex',
        marginHorizontal:200,
    }
     

  });
  