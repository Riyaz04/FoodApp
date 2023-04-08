import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, hr80 } from '../../global/Style'
import Elevation from 'react-native-elevation'


const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Foodie App</Text>
      <View style={styles.logoOut}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
      </View>
      <View style={hr80} />
      <Text style={styles.text}>
        Find the best food around you at lowest price
      </Text>
      <View style={hr80} />
      <Image
        resizeMode={'cover'} // cover or contain its upto you view look
      />

      <View style={[styles.btnOut]}>
        <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
          <Text style={[styles.btn,Elevation[20]]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={[styles.btn,Elevation[20]]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ff4242',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    textTransform:'uppercase',
    // color:colors.coll,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '400',
  },
  logoOut: {
    width: '80%',
    height: '30%',
    // backgroundColor:'white',
    alignItems: 'center',
  },
  logo: {
    width: '120%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    width: '80%',
    // color:colors.coll,
    color: 'white',

    textAlign: 'center',
  },
  btnOut: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
})
