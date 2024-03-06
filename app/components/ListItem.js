import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../configs/colors'
import AppText from './AppText'

export default function ListItem() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/Foods/Food_1.png')} />
      <AppText style={styles.title} fontSize={20}>
        Veggie tomato mix
      </AppText>
      <AppText style={styles.subTitle} color='coral'>
        N1,900
      </AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 240,
    height: 300,
    borderRadius: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: -40,
  },
  title: {
    textAlign: 'center',
    width: '50%',
    marginBottom: 20,
  },
  subTitle: {
    marginBottom: 35,
  },
})
