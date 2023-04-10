import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from '../global/Style'
// import Elevation from 'react-native-elevation'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Categories = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.text}>Pizza</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="hotdog"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.text}>HotDog</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="muffin"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.text}>Muffin</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="noodles"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.text}>Noodles</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="popcorn"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.text}>PopCorn</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="french-fries"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.text}>French-Fries</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    width: '90%',
    elevation: 20,
    borderRadius: 10,
  },
  head: {
    color: colors.text1,
    fontSize: 25,
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 30,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  myIcon: {
    color: colors.text3,
    marginHorizontal: 10,
  },
  text: {
    color: colors.text3,
  },
})
