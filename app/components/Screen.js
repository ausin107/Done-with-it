import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
export default function Screen({ children, style }) {
  return <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
  },
})
