import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native'
import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import HomeHeadNav from '../Component/HomeHeadNav'
import Categories from '../Component/Categories'
import Slider from '../Component/Slider'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../global/Style'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeadNav />
      <View style={styles.searchBox}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput style={styles.input} placeholder="search" />
      </View>
      <Categories />
      <Slider />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    alignItems: 'center',
    width: '100%',
  },
  searchBox:{
    display:'flex',
    width:'90%',
    // overflow:'hidden',
    flexDirection:'row',
    backgroundColor:colors.col1,
    borderRadius:30,
    alignItems:'center',
    // paddingHorizontal:150,ggvg
    padding:10,
    margin:20,
    elevation:10,

  },
  input:{
    marginLeft:10,
    width:'90%',
    fontSize:18,
    color: colors.text1,
  },
  searchIcon:{
    color: colors.text1,

  }
})

export default Home
