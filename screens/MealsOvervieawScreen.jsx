import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {MEALS} from '../data/dummy-data'

const MealsOvervieawScreen = ( {route}) => {    
    const catId = route.params.categoryId
    
  return (
    <View style={styles.constainer}>
      <Text>MealsOvervieawScreen - {catId}</Text>
    </View>
  )
}

export default MealsOvervieawScreen

const styles =StyleSheet.create({
    constainer:{
        flex:1,
        padding:16
    }
})