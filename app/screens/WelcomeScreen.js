import { Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import { colors } from '../configs/colors'
export default function WelcomeScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Food for Everyone</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Welcome/Homepage_1.png')} />
        <Image source={require('../assets/Welcome/Homepage_2.png')} style={styles.secondImage} />
      </View>
      <View style={styles.blurContainer}>
        <Image source={require('../assets/Welcome/Homepage_blur_1.png')} style={{ bottom: '50%' }} />
        <Image source={require('../assets/Welcome/Homepage_blur_2.png')} style={{ right: '50%', bottom: '45%' }} />
      </View>
      <AppButton color='coral' bgColor='white' style={{ bottom: '30%', marginHorizontal: 40, width: '80%' }}>
        Get Started
      </AppButton>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  headerContainer: {
    margin: 40,
  },
  logoContainer: {
    width: 70,
    height: 70,
    backgroundColor: colors.white,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 56,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  secondImage: {
    right: '25%',
    zIndex: -1,
  },
  blurContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
})
