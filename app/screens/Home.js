import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '../configs/colors'
import AppText from '../components/AppText'
import SearchBar from '../components/SearchBar'
import ListItem from '../components/ListItem'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name='menu' size={30} color='black' />
        <Feather name='shopping-cart' size={30} color='#aaaaaa' />
      </View>
      <AppText style={styles.headerText}>Delicious food for you</AppText>
      <SearchBar style={{ marginBottom: 80 }} />
      <ListItem />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: 60,
    paddingHorizontal: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 35,
    width: '70%',
    marginBottom: 30,
  },
})
