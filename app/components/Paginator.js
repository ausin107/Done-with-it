import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../configs/colors'
export default function Paginator({ style, data, activeItem }) {
  return (
    <View style={style}>
      {data.map((_, i) => {
        return <View key={i} style={[styles.dot, activeItem == i && { backgroundColor: colors.coral }]}></View>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#C4C4C4',
  },
})
