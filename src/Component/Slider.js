import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../global/Style'

const Slider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper autoplay={true} autoplayTimeout={3} showsButtons={true} 
        dotColor='grey' activeDotColor='red'
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
        >
          <View style={styles.slide}>
            <Image
              source={require('../../assets/SliderImage/img1.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/SliderImage/img2.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/SliderImage/img3.png')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  offerSlider: {
    marginTop: 20,
    width: '90%',
    height: 200,
    backgroundColor: colors.col1,

    // paddingHorizontal:20,
    // paddingVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation:10,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    // paddingVertical:100,
    // margin:20,
    borderRadius: 20,
    // alignSelf:'center',
  },
  slide: {
    width: '100%',
    elevation: 200,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize:40,
    color:colors.text1,
    backgroundColor:'white',
    borderRadius:20,
    width:40,
    height:40,
    textAlign:'center',
    lineHeight:40,
  }
})
