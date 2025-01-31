import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      subtitleContainer: {
        margin: 6,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 6,
        textAlign: 'center',
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
      }
})