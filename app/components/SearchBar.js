import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '../configs/colors'
export default function SearchBar({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Feather name='search' size={27} color='black' style={styles.icon} />
      <TextInput placeholder='Search' style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    width: '100%',
    paddingVertical: 20,
    paddingLeft: 30,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
  },
  icon: {
    marginRight: 15,
    fontWeight: '',
  },
  textInput: {
    fontSize: 18,
    width: '80%',
    fontWeight: '600',
  },
})
