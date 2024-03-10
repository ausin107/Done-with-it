import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '../configs/colors'
import AppText from '../components/AppText'
import SearchBar from '../components/SearchBar'
import ListItem from '../components/ListItem'
import Carousel from 'react-native-snap-carousel'
import { foodData } from '../constant/data'

export default function Home() {
  const { width: screenWidth } = Dimensions.get('screen')
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Feather name='menu' size={30} color='black' />
          <Feather name='shopping-cart' size={30} color='#aaaaaa' />
        </View>
        <AppText style={styles.headerText}>Delicious food for you</AppText>
        <SearchBar style={styles.searchBar} />
      </View>
      <Carousel
        style={{ paddingHorizontal: 80 }}
        data={foodData}
        renderItem={({ item }) => <ListItem data={item} image={item.image} />}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.65}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: 60,
  },
  topContainer: {
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
  searchBar: {
    marginBottom: 60,
  },
})
