import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreens from "./screens/CategoryScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOvervieawScreen from "./screens/MealsOvervieawScreen";
import MealDetailsScreen from './screens/MealDetailScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: "#95600f" }
        }}>
          <Stack.Screen name="MealsCategories" component={CategoryScreens} options={{
            title: 'All Categories',
          }} />
          <Stack.Screen name="MelasOverview" component={MealsOvervieawScreen}
          // options={({ route, navigation }) => {
          //  const catId = route.params.categoryId
          //  return {
          //    title: catId
          //  }
          // }}
          />
           <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
