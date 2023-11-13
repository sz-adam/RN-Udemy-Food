import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MeallItem from "../components/MeallItem";

const MealsOvervieawScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MeallItem title={itemData.item.title} />;
  }
  return (
    <View style={styles.constainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOvervieawScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
