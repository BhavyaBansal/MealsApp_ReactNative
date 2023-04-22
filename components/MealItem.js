import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails"
function MealItem({id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();
  function mealDetailHandler(){
    navigation.navigate("MealDetail",{
      mealId: id
    });
  }
  return (
    <View style={styles.mealItem}>
      <View>
        <Pressable
          onPress={mealDetailHandler}
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        >
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
        </Pressable>
      </View>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
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
    letterSpacing: 1,
    margin: 8,
  },
  buttonPressed: {
    opacity: Platform.OS === "android" ? 1 : 0.5,
  },
});
