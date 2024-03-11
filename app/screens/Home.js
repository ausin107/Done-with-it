import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native'

import { Feather, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../configs/colors'
import AppText from '../components/AppText'
import SearchBar from '../components/SearchBar'
import ListItem from '../components/ListItem'
import Carousel from 'react-native-snap-carousel'
import { foodData } from '../constant/data'

export default function Home() {
  const { width: screenWidth } = Dimensions.get('screen')
  const test = [
    {
      id: '1',
      title: 'Foods',
    },
    {
      id: '2',
      title: 'Drinks',
    },
    {
      id: '3',
      title: 'Snacks',
    },
    {
      id: '4',
      title: 'Sauce',
    },
  ]
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
      <View>
        <FlatList
          data={test}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                item.id == '1' ? { borderBottomWidth: 3, borderColor: colors.coral, paddingBottom: 10 } : {},
                { paddingHorizontal: 10, marginHorizontal: 10 },
              ]}>
              <AppText color={item.id == '1' ? 'coral' : '#9A9A9D'} fontWeight='400'>
                {item.title}
              </AppText>
            </View>
          )}
          horizontal
          style={{ marginLeft: 50, marginBottom: 20 }}
        />
      </View>
      <View style={[styles.topContainer, { display: 'flex', alignItems: 'flex-end' }]}>
        <AppText color='coral' fontSize={15} style={{ fontWeight: '400' }}>
          see more
        </AppText>
      </View>
      <Carousel
        style={{ paddingHorizontal: 80 }}
        data={foodData}
        renderItem={({ item }) => <ListItem data={item} />}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.65}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 40,
          justifyContent: 'space-between',
          alignItems: 'center',
          top: -20,
        }}>
        <MaterialCommunityIcons name='home-variant' size={35} color='#FA4A0C' />
        {/* <MaterialCommunityIcons name='home-variant-outline' size={35} color='#aaaaaa' /> */}
        <FontAwesome5 name='heart' size={27} color='#aaaaaa' />
        {/* <FontAwesome name='heart' size={27} color='#FA4A0C' /> */}
        <FontAwesome5 name='user' size={24} color='#aaaaaa' />
        {/* <FontAwesome5 name='user-alt' size={24} color='#FA4A0C' /> */}
        <MaterialIcons name='history' size={30} color='#aaaaaa' />
      </View>
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
    marginBottom: 20,
  },
})
