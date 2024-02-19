import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { CheckBox,  TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Registers = ()=>{
    return(
        <View style={styles.container}>
        
        <View style={styles.image}>
        <Image source={require('../assets/back.jpg')} style={styles.img} />
        </View>
        <View >
        <Text style={styles.register}>Register</Text>
        </View>
         
        <TextInput  
      style={{width:300, backgroundColor: '#F4FBFD', gap: 10,  borderRadius:30,  backgroundColor:'white', marginVertical:8,}}
        label='Email' 
        mode='flat' underlineColor='white' theme={{roundness: 20}}
        left={<TextInput.Icon  icon={'account-outline'}  color={'#FEBE6D'} backgroundColor={'#FDEAC9'} />}
      />
         <TextInput  
      style={{width:300, backgroundColor: '#F4FBFD', gap: 10,  borderRadius:30,  backgroundColor:'white', underColor:'white',marginVertical:8}}
        label='Email' 
        mode='flat'  underlineColor='white' theme={{roundness: 20}}
        left={<TextInput.Icon  icon={'email-outline'}  color={'#9DC64B'} backgroundColor={'#ECFDCA'} />}
      />
         <TextInput  
      style={{width:300, backgroundColor: '#F4FBFD', gap: 10,  borderRadius:30,  backgroundColor:'white', underColor:'white',marginVertical:8}}
        label='Password' 
        mode='flat' underlineColor='white' theme={{roundness: 20}}
        left={<TextInput.Icon  icon={'lock-outline'}  color={'#B087FE'} backgroundColor={'#F1E9FE'} />}
      />

      <View style={styles.btn}>
        <TouchableOpacity>
          <Text style={styles.btntext} >Register</Text>
        </TouchableOpacity>
      </View>
        
      <View style={styles.socialicons}>
        <TouchableOpacity>
        <Icon name="facebook" type="font-awesome" size={30} color="blue" style={styles.socialicon}/>
        </TouchableOpacity>
      

      <TouchableOpacity>
      <Icon name="google" type="font-awesome" size={30} color="red" style={styles.socialicon}/>
      </TouchableOpacity>
      

      <TouchableOpacity>
      <Icon name="apple" type="font-awesome" size={30} color="black" style={styles.socialicon}/>
      </TouchableOpacity>
      


      </View>
        

        <StatusBar style="auto" />
      </View>
    )
}


const styles= StyleSheet.create({
    container: {
      flexDirection:'column',
      
      backgroundColor: '#F5F5F5',
      marginBottom:10,
      alignItems: 'center',
      justifyContent: 'center',
    },

   
    register:{
   fontSize:30,
 fontWeight:'bold', 
 marginTop:130, 
 marginBottom:12,
    },


    image:{
      width:'100%',
     height:200,
     
    },
    btn:{
    backgroundColor:'#1F1F1E',
    width:300,
    borderRadius:30, 
    paddingTop:20,
    paddingBottom:20,

    },
    btntext:{
      color:'white',
      marginHorizontal:120,
    },
    socialicons:{
      flexDirection:'row',
      display:'flex',
      
      
      
    },
    socialicon:{
    marginHorizontal:30,
    marginBottom:30,
    marginTop:28,
    backgroundColor:'white',
    paddingBottom:10,
    paddingTop:10,
    paddingLeft:15,
   marginLeft:20,
   borderRadius:20,
   width:60,
    },
  });
  