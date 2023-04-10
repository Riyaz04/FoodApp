import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from '../global/Style'
import Elevation from 'react-native-elevation'

const HomeHeadNav = () => {
  return (
    <View style={[styles.container, Elevation[6]]}>
      <Fontisto
        name="nav-icon-list-a"
        size={24}
        color="black"
        style={styles.myIcons}
      />
      <View style={styles.containerIn}>
        <Text style={styles.myText}>Foodie App</Text>
        <Ionicons
          name="fast-food-outline"
          size={29}
          color="black"
          style={styles.myIcons}
        />
      </View>
      <FontAwesome5
        name="user-circle"
        size={29}
        color="black"
        style={styles.myIcons}
      />
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // height:'100%',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    backgroundColor: colors.col1,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  containerIn: {
    display: 'flex',
    flexDirection: 'row',
  },
  myIcons:{
    color:colors.text1,
  },
  myText:{
    color:colors.text1,
    fontSize:24,
    paddingHorizontal:5,
  }
})
