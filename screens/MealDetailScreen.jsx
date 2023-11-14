import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      {selectedMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}

      <Subtitle>Steps</Subtitle>
      {selectedMeal.steps.map((step) => <Text key={step}>{step}</Text>)}
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white'
  },

})