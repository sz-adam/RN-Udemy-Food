import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoryScreens from "./screens/CategoryScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOvervieawScreen from "./screens/MealsOvervieawScreen";
import MealDetailsScreen from './screens/MealDetailScreen'
import FavoritesScreens from './screens/FavoritesScreens'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function Drawernavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: "#95600f" },
    drawerContentStyle:{backgroundColor:'#351401'},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:"#95600f"
  }}>
    <Drawer.Screen name="Categories" component={CategoryScreens} options={{
      title:'All Categories',
      drawerIcon:({color,size}) => <Ionicons name="list" color={color} size={size}/>
    }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreens}
    options={{
      drawerIcon:({color,size}) => <Ionicons name="star" color={color} size={size}/>
    }}/>
  </Drawer.Navigator>
}

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
          <Stack.Screen name="Drawe" component={Drawernavigator} options={{           
            headerShown: false
          }} />

          <Stack.Screen name="MelasOverview" component={MealsOvervieawScreen}
          // options={({ route, navigation }) => {
          //  const catId = route.params.categoryId
          //  return {
          //    title: catId
          //  }
          // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailsScreen} options={{
            title:'About the Meal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
