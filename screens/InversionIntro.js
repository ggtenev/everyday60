import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';

export default function InversionIntro({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/cards/inversionIntro.png")} />
      <Text>Inversions workout intro...</Text>
      <Text>...</Text>
      <Text>...</Text>
      <Text>...</Text>
      <View style={styles.btn}>
        <Button title='start workout' style={styles.btn} color='green' onPress={() => navigation.navigate('One')}/>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'white',
    
  },
  img:{
    height:'40%',
    
  },
  btn: {
    width: 200,
    // height:50,
    borderRadius: 6,
    overflow: "hidden",
  },
})
