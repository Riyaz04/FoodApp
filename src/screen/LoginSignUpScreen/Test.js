import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import CheckBox from 'expo-checkbox'
import React, { useState } from 'react'

// navigation {(navigation)} for using navgation
const ContactForm = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  // console.log(userName);

  const [userPassword, setUserPassword] = useState('')
  // console.log(userPassword);

  const submit = () => {
    // alert("userName, userPassword");
    if (userName === 'Riyaz' && userPassword === 'ansari') {
      alert(`Thank You ${userName}`)
      // for go to Home page when submit successfully
      navigation.navigate('Home')
    } else {
      alert(`Username and Password is not correct`)
    }
  }

  const [agree, setAgree] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}> Login form </Text>
      <Text style={styles.description}>
        You can reach us anytime via Riyazblog.me
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.lables}>Enter Your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => setUserName(actualData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.lables}>Enter Your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={userPassword}
          onChangeText={(actualData) => setUserPassword(actualData)}
        />
      </View>
      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? 'green' : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.btnStyleUp,
          { backgroundColor: agree ? 'green' : 'gray' },
        ]}
        disabled={!agree}
        // onPress={()=>submit()}
        onPress={submit}
      >
        <Text style={styles.btnStyle}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: 'white',
    // display:'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  mainHeader: {
    fontSize: 25,
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: 'bold',
    alignSelf: 'center',
  },
  description: {
    fontWeight: 20,
    fontSize: 20,
    color: '7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
    // fontFamily:'regular'
    // alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  lables: {
    font: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0,3)',
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 5,
    // fontFamily: 'regular',
    fontSize: 20,
  },
  btnStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 25,
  },
  wrapperText: {
    paddingHorizontal: 10,
  },
})

export default ContactForm
