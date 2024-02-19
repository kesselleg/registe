import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { CheckBox,  TextInput,  } from "react-native-paper";

import Icon from 'react-native-vector-icons/FontAwesome';


export const Login=({navigation})=>{
    return (
      <View style={styles.container}> 
        <View >
        <Image source={require('../assets/back1.jpg')}/>
        
        <StatusBar style="auto" />
      </View>
      <Text style={styles.logintext}>Login</Text>
       <View style={{marginHorizontal:40, flexDirection:'column',  justifyContent:'center',}}>
        
      <TextInput  
      style={{width:300, backgroundColor: '#F4FBFD', gap: 10,  borderRadius:6,  backgroundColor:'white', marginTop:10, paddingBottom:4,}}
        label='Email' 
        mode='flat' underlineColor='#EFEFF0'  theme={{roundness: 20}}
        left={<TextInput.Icon  icon={'account-outline'}  color={'#FBA61A'} backgroundColor={'#FFF9EF'}/>}
      />
    
    <TextInput  
      style={{width:300, backgroundColor: '#F4FBFD', gap: 10,  borderRadius:20,  backgroundColor:'white', paddingBottom:10}}
        label='Password'
        mode='flat' underlineColor='white'   theme={{roundness: 2}}
        left={<TextInput.Icon  icon={'lock-outline'}  color={'#CAA8FF'} backgroundColor={'#F4EEFE'}/>}
      />
    
    
        
        {/* <View style={styles.checkbox}>
        <CheckBox  />
        <Text style={styles.checktext}>Remember me</Text>
        </View>
         */}
      <View style={styles.btn}>
      <TouchableOpacity style={styles.btnoption} onPress={() =>
        navigation.navigate('home')
      }>
        <Text style={styles.texts}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() =>
        navigation.navigate('register')
      }>
          <Text style={styles.btntext} >Login</Text>
          </TouchableOpacity>
      </View>
     
      
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
      </View>
    );

    
}

const styles = StyleSheet.create({

  container:{
    marginTop:30,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#F3F3F3',
  },
logintext:{
    fontSize:30,
    fontWeight:'bold',
   
},

btn:{
    flexDirection:'row',
    display:'flex',
    justifyContent:'space-around',
    gap:90,
    marginTop:20,

},
texts:{
    color:'#4A0EC2',
    marginTop:18,
},
 

btntext:{
    color:'white',
    backgroundColor:'#1F1E21',
    paddingBottom:16,
    paddingTop:16,
    width:100,
    paddingLeft:30,
    borderRadius:24,
},

socialicons:{
    flexDirection:'row',
    display:'flex',
    marginHorizontal:40,
    gap:60,
    marginBottom:80,
    marginTop:50,
   
},
socialicon:{
    backgroundColor:'white',
    width:50,
    borderRadius:40,
    paddingBottom:10,
    paddingTop:10,
    paddingLeft:12,
}
  });
  