import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";

 function One({navigation}) {
  const [play, setPlay] = useState(false);
  const [count, setCount] = useState(false);
  const soundObject =  new Audio.Sound() ;
  const loadAudio = useCallback( async () => {
    try {
      await soundObject.loadAsync(require("../assets/audio/card1.mp3"));
      // await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    } 
  },[]);

  let countt = 0;
  
  let timeID = setInterval(() => {
    countt++
    if(countt == 5){
      navigation.navigate('Two')
      countt = 0;
    }
  }, 1000);

  useEffect(() => {
    loadAudio();
    
    
  }, );

  const stopAudio = async () => {
    await soundObject.pauseAsync()
    clearInterval(timeID)
    setPlay(false)
  }
  const playAudio = async () => {
    await soundObject.playAsync()
  //  setPlay(true)
  }

  return (
    <View style={styles.container}>

        <Image style={styles.img} source={require("../assets/cards/1.png")} />
        <View style={{flexDirection:'row',justifyContent:'space-around',width:'50%'}}>
        <View style={styles.btn}>
          <Button
            color='green'
            title='Start'
            onPress={playAudio}
          />
        </View>
        <View style={styles.btn}>
          <Button
            color='red'
            title='Pause'
            onPress={stopAudio}
          />
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginBottom: 10,
    height: "90%",
    // width:'95%'
  },
  btn: {
    width: 60,
    borderRadius: 6,
    overflow: "hidden",
  },
});

export default React.memo(One)
