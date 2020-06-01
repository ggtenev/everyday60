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
import { AntDesign } from '@expo/vector-icons';

function One({ navigation }) {
  const [play, setPlay] = useState(true);
  const [timeID, setTimeID] = useState(false)
  const [count, setCount] = useState(0);
  const [sound,setSound] = useState(new Audio.Sound() )
  const soundObject = new Audio.Sound();

  let countt = 0;

  const stopAudio = async () => {
    await sound.pauseAsync();
    clearInterval(timeID);
    setTimeID(false);
    setPlay(false);
  };
  const playAudio =  () => {
    if(!play){
      sound.playAsync();
    }
    if (!timeID) {
      setTimeID(setInterval(() => {
        countt++;
        if (countt == 15) {
          navigation.navigate("Four");
          // countt = 0;
        }
      }, 1000));
    }
     setPlay(true)
  };

  const loadAudio = async () => {
    // const soundObject = new Audio.Sound()
    playAudio()
    try {
      await soundObject.loadAsync(require("../assets/audio/card3.mp3"));

       setSound(soundObject)
       await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };


  // let timeID = false;

  useEffect(() => {
    loadAudio();
    // return () => soundObject.stopAsync();
    return () => {
      soundObject.unloadAsync()
      setSound(soundObject)
      // sound.unloadAsync()
    }
  }, []);

  

  return (

      <View style={styles.container}>
        {/* <View style={styles.btnWrapper}> */}
        <Image style={styles.img} source={require("../assets/cards/3.png")} />
        {/* <View style={styles.buttons}>
          <View style={styles.btn}>
            <Button color='green' title='Start' onPress={playAudio} />
          </View>
          <View style={styles.btn}>
            <Button color='red' title='Pause' onPress={stopAudio} />
          </View>
        </View> */}
        
        {
          play ? <AntDesign
           name="pausecircle"
            size={48} 
            color="grey"
            onPress={stopAudio} /> : <AntDesign 
            name="play" 
            size={48} 
            color="grey" 
            onPress={playAudio} />
        }
        {/* </View> */}
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
    
    // marginTop:-22,
    height: "88%",
    width:'94%'
  },
  btn: {
    width: 60,
    borderRadius: 6,
    overflow: "hidden",
  },
  buttons:{
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  btnWrapper:{
    borderWidth:1,
    borderColor:'grey',
    flex:1,
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
    
  }
});

export default One;
