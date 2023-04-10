import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { titles, colors, btn1, hr80 } from '../../global/Style'
import Elevation from 'react-native-elevation'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const Login = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign In</Text>
      <View style={[styles.inputout, Elevation[6]]}>
        <FontAwesome5
          style={styles.user}
          name="user"
          size={24}
          color={emailFocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true)
            setPasswordFocus(false)
            setShowPassword(false)
          }}
        />
      </View>
      <View style={[styles.inputout, Elevation[6]]}>
        <MaterialIcons
          style={styles.user}
          name="lock-outline"
          size={27}
          color={passwordFocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Password"
          onFocus={() => {
            setEmailFocus(false)
            setPasswordFocus(true)
          }}
          secureTextEntry={showPassword === false ? true : false}
        />
        <Feather
          style={styles.eye}
          name={showPassword == false ? 'eye-off' : 'eye'}
          size={24}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <TouchableOpacity style={[btn1, Elevation[12]]} onPress={()=> navigation.navigate('Home')} >
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btntxt,
            fontWeight: 'bold',
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
      <Text style={styles.forgot}>Forget Password?</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gfText}>Sign In With</Text>

      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={[styles.gfIcons, Elevation[10]]}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.gfIcons, Elevation[12]]}>
            <FontAwesome name="facebook-f" size={25} color="#4267B2" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80}></View>

      <Text>
        Don't have an account?
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate('signup')}
        >
          {' '}
          Sign Up
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 10,
    alignSelf: 'center',
    fontWeight: '500',
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  input: {
    fontSize: 18,
    // marginLeft: 10,
    // width: '80%',
    // marginVertical:10,
    fontSize: 20,
    // borderWidth: 10,
    // borderColor: 'rgba(0,0,0,0,3)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // width: 280,
    overflow: 'hidden',
    // outlineStyle: 'none',
  },
  user: {
    alignSelf: 'center',
  },
  eye: {
    alignSelf: 'center',
    position: 'absolute',
    right: 20,
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    fontSize: 20,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  gfText: {
    color: colors.text2,
    marginVertical: 10,
    fontSize: 23,
    fontWeight: '600',
  },
  gf: {
    flexDirection: 'row',
  },
  gfIcons: {
    backgroundColor: 'white',
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 10,
  },
  signUp: {
    color: colors.text1,
    padding: 10,
    fontWeight: '600',
  },
})

export default Login
