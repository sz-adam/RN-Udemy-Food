import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import MeallItem from '../MeallItem';

const MealList = ({items}) => {

    function renderMealItem(itemData) {
        const meailItemProps = {
          id:itemData.item.id,
          title: itemData.item.title,
          imageUrl: itemData.item.imageUrl,
          duration: itemData.item.duration,
          complexity: itemData.item.complexity,
          affordability: itemData.item.affordability,
        };
        return <MeallItem {...meailItemProps} />;
      }
      return (
        <View style={styles.constainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
    };


export default MealList

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        padding: 16,
      },
})