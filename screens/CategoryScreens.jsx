import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoryScreens = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MelasOverview",{
        categoryId:itemData.item.id
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreens;
