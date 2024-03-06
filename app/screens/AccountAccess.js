import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TextInput } from 'react-native'
import { colors } from '../configs/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
export default function AccountAccess() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/Logo.png')} />
        <View style={styles.textContainer}>
          <TouchableWithoutFeedback>
            <Text style={[styles.textItem, styles.active]}>Login</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text style={styles.textItem}>Sign-up</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View>
          <AppText color='gray' fontSize={15}>
            Email address
          </AppText>
          <TextInput style={styles.textInput} placeholder='' />
        </View>
        <View style={{ marginTop: 35, marginBottom: 30 }}>
          <AppText color='gray' fontSize={15}>
            Password
          </AppText>
          <TextInput style={styles.textInput} placeholder='' />
        </View>
        <AppText color='coral' style={{ marginBottom: 130 }}>
          Forgot passcode?
        </AppText>
        <AppButton>Login</AppButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.white,
    height: '40%',
    width: '100%',
    borderRadius: 40,
    paddingHorizontal: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textItem: {
    fontSize: 18,
    fontWeight: '700',
    padding: 10,
    paddingHorizontal: 35,
  },
  active: {
    borderBottomWidth: 3,
    borderColor: colors.coral,
  },
  mainContainer: {
    paddingHorizontal: 55,
    paddingTop: 60,
  },
  textInput: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: colors.black,
    borderBottomWidth: 0.5,
    fontWeight: '700',
    fontSize: 17,
  },
})
