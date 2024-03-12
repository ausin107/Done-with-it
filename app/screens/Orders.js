import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ReturnBar from '../components/ReturnBar'
import NoItem from '../components/NoItem'
import AppButton from '../components/AppButton'
import { Feather } from '@expo/vector-icons'
export default function Orders() {
  const historyEle = () => {
    return <Feather name='shopping-cart' size={120} color='#C7C7C7' style={{ marginBottom: 10, paddingRight: 20 }} />
  }
  return (
    <Screen style={styles.container}>
      <ReturnBar name='Orders' />
      <NoItem Icon={historyEle} title='No orders yet' subTitle='Hit the orange button down below to Create an order' />
      <AppButton>Start odering</AppButton>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    marginBottom: 30,
  },
})
