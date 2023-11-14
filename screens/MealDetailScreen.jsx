import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View>
      <Image source={{uri: selectedMeal.imageUrl}}/>
      <Text>{selectedMeal.title}</Text>
      <View>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
      </View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({})