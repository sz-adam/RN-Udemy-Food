import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";
import React from "react";

const MeallItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#cccc" }}
        style={({ pressed }) =>
          (pressed ? styles.buttonPressed : null
  )}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MeallItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    backgroundColor: "white", //ios
    shadowColor: "black", //ios
    shadowOpacity: 0.25, //ios
    shadowOffset: { width: 0, height: 2 }, //ios
    shadowRadius: 8, //ios
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
