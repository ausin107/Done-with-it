import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../configs/colors'

export default function AppButton({ children, style, bgColor = 'primary', color = 'white' }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: colors[bgColor] }, style]}>
      <Text style={[styles.content, { color: colors[color] }]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: '100%',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: 15,
    fontWeight: '700',
  },
})
