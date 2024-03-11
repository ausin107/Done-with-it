import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function NoItem({ Icon, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Icon />
      <AppText fontSize={28} style={styles.mrBottom} fontWeight='600'>
        {title}
      </AppText>
      <AppText style={styles.subTitle} fontWeight='400' color='#6a6a6b'>
        {subTitle}
      </AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '30%',
  },
  subTitle: {
    width: '80%',
    textAlign: 'center',
  },
  mrBottom: {
    marginBottom: 10,
  },
})
