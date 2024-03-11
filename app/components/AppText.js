import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../configs/colors'

export default function AppText({ children, fontSize = 17, color = 'black', fontWeight = '700', style }) {
  return (
    <Text
      style={[styles.container, { fontSize: fontSize, fontWeight: fontWeight, color: colors[color] || color }, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    fontWeight: '700',
  },
})
