import React from 'react';
import { View,Text,Button, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function About() {

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.everyday60.uk/');
  }
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button title='Everyday60' onPress={handleOpenWithWebBrowser}/>
     </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})