import { StyleSheet, Image, View, Dimensions, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import ReturnBar from '../components/ReturnBar'
import Screen from '../components/Screen'
import Carousel from 'react-native-snap-carousel'
import { Foods } from '../constant/data'
import Paginator from '../components/Paginator'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
export default function FoodDetail() {
  const { width: screenWidth } = Dimensions.get('screen')
  const [activeItem, setActiveItem] = useState(0)
  const carouselRef = useRef(null)
  return (
    <Screen style={styles.container}>
      <ReturnBar />
      <Carousel
        data={Foods}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.imageItem} source={item.image} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        ref={carouselRef}
        onSnapToItem={() => setActiveItem(carouselRef.current.currentIndex)}
      />
      <Paginator style={styles.paginator} data={Foods} activeItem={activeItem} />
      <View style={styles.foodInfo}>
        <AppText fontSize={28}>Veggie tomato mix</AppText>
        <AppText fontSize={22} color='coral'>
          N1,900
        </AppText>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.appInfo}>
          <AppText>Delivery info</AppText>
          <AppText fontSize={15} fontWeight='400' color='gray'>
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </AppText>
        </View>
        <View style={styles.appInfo}>
          <AppText>Return policy</AppText>
          <AppText fontSize={15} fontWeight='400' color='gray'>
            All our foods are double checked before leaving our stores so by any case you found a broken food please
            contact our hotline immediately.
          </AppText>
        </View>
        <AppButton style={{ marginBottom: 40 }}>Add to cart</AppButton>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  imageItem: {
    width: 250,
    height: 250,
  },
  paginator: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 35,
  },
  infoContainer: {
    paddingHorizontal: 40,
  },
  foodInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  appInfo: {
    marginBottom: 35,
  },
})
