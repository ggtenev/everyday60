import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons';

import inversions from "../assets/cards/inversions.png";
import standing from '../assets/cards/standing-balancing.png';
import backbends from '../assets/cards/backbends.png';
import hip from '../assets/cards/hip.png';
import arm from '../assets/cards/arm-balance.png';
import seated from '../assets/cards/seated.png';

export default function Home({navigation}) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Inversions') }>
        <Image source={inversions} style={styles.img}/>
        <View style={styles.cardTitle}>
          <Text style={{...styles.titles,fontSize:20,color:'#be5ff4'}}>Purple</Text>
          <Text style={styles.titles}>Inversions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Inversions') }>
        <Image source={standing} style={styles.img}/>
        <View style={styles.cardTitle}>
          <Text style={{...styles.titles,fontSize:20,color:'#765ef9'}}>Blue</Text>
          <Text style={styles.titles}>Standing /{"\n"}Balancing</Text>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Inversions') }>
        <Image source={backbends} style={styles.img}/>
        <View style={{...styles.cardTitle, marginRight:2}}>
          <Text style={{...styles.titles,fontSize:20,color:'#7bdb43'}}>Green</Text>
          <Text style={styles.titles}>Backbends</Text>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Inversions') }>
        <Image source={hip} style={styles.img}/>
        <View style={{...styles.cardTitle, marginRight:-4}}>
          <Text style={{...styles.titles,fontSize:20,color:'#d2e80b'}}>Yellow</Text>
          <Text style={styles.titles}>Hip Openers</Text>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Inversions') }>
        <Image source={arm} style={styles.img}/>
        <View style={{...styles.cardTitle, marginRight:-14}}>
          <Text style={{...styles.titles,fontSize:20,color:'orange'}}>Orange</Text>
          <Text style={styles.titles}>Arm Balances</Text>
        </View>
   
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Inversions') }>
        <Image source={seated} style={styles.img}/>
        <View style={{...styles.cardTitle, marginRight:-14}}>
          <Text style={{...styles.titles,fontSize:20,color:'red'}}>Red</Text>
          <Text style={styles.titles}>Floor / Seated</Text>
        </View>
        
      </TouchableOpacity>
      
    </View>
    </ScrollView>
  );
}

Home.navigationOptions = ({navigation}) => {
 return {
  headerRight:()=> <Entypo 
  name="info" 
  size={26} color="black" 
  style={{marginRight:13}}
  onPress={() => navigation.navigate('About')}/>
 }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    backgroundColor:'#fcfcfc',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginVertical:10,
    width:'90%',
    padding:10,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    elevation:2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 11,
  },
  img:{
    height:100,
    width:100
  },
  titles:{
    fontWeight:'700',
    fontSize:18
  },
  cardTitle:{
    marginRight:5
  }
});
