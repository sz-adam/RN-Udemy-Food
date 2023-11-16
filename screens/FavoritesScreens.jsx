import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealList from '../components/MealList/MealList'
import {FavoritesContext} from '../store/context/Favorites-context'
import { MEALS } from "../data/dummy-data";

const FavoritesScreens = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id)
  )
  return <MealList items={favoriteMeals} />
}

export default FavoritesScreens

const styles = StyleSheet.create({})