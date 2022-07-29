import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import users from '../../userList.json';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons"

const InstaStories = () => {
  return (
    <ScrollView style={{flex: 1}} horizontal showsHorizontalScrollIndicator={false}>
       {/* part 2 */}
        <View style={{padding:7}}>
            <Image 
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5WEWvBvL3dv8hsq6JWmaDs2Z_RGXN7YDAhI3_csMkEVtFXTaSPTai_qnuEUc5_Z4uBA&usqp=CAU'}}
             style={styles.userImage}/>
             <View style={{position:'absolute'}}>
                <View style={styles.addBtnContainer}>
                    <Ionicons name="add" style={styles.addbtn}/>
                </View>
                <Text style={[styles.userName,{textTransform:'capitalize'}]}>Your Story</Text>
             </View>
        </View>
             {/* part 2 */}
      {users.map((item, index) => (
        <View style={{width: 85, padding: 5}}>
          <LinearGradient
            colors={['#bc2a8d', '#e95950', '#fccc63']}
            style={{padding: 2, borderRadius: 50}}>
            <Image source={{uri: item.photo}} style={[styles.userImage, {borderWidth:4}]} />
          </LinearGradient>
          <Text style={styles.userName}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default InstaStories;

const styles = StyleSheet.create({
  userImage: {
    height: 70,
    width: 70,
    borderRadius:50,
    borderColor:"#ffffff",
  },
  userName:{
    textAlign:'center',
    fontSize:13,
    textTransform:'lowercase',
    marginTop:5,
    color:'#000',
    fontWeight:'400',
  },
  addBtnContainer:{
   marginTop:55,
   backgroundColor:'#4c68d7',
   marginLeft:55,
   width:23,
   height:23,
   borderRadius:50,
   borderWidth:1.5,
   borderColor:"#ffff",
   justifyContent:'center'
  },
  addbtn:{
  color:'#ffffff',
  textAlign:'center',
  textAlignVertical:'center',
  font:12,
}
});
