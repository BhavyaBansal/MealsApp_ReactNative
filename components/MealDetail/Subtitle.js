import { View,Text,StyleSheet } from "react-native";
function Subtitle({children}){
    return (
      <View style={styles.subView}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    );
}
export default Subtitle;
const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subView: {
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 14,
    marginVertical: 4,
  },
});