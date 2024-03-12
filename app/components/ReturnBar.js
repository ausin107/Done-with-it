import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import AppText from './AppText'
import Constants from 'expo-constants'
export default function ReturnBar({ name }) {
  return (
    <View style={styles.container}>
      <Feather name='chevron-left' size={30} color='black' />
      {name && (
        <View>
          <AppText fontSize={18} fontWeight='600'>
            {name}
          </AppText>
        </View>
      )}
      <Feather name='heart' size={25} color='black' disabled style={name && { opacity: 0 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width,
    position: 'absolute',
    top: Constants.statusBarHeight + 15,
  },
})
