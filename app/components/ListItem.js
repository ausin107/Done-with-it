import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../configs/colors'
import AppText from './AppText'

export default function ListItem({ data }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={data.image} />
      <AppText style={styles.title} fontSize={20}>
        {data.name}
      </AppText>
      <AppText style={styles.subTitle} color='coral'>
        {data.price}
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
    marginRight: 40,
    marginTop: 40,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 300,
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
