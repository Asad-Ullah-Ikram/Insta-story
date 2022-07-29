import {  SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import InstaStories from '../Components/Head/InstaStories'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <InstaStories/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})