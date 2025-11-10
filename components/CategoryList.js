import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const categories = [
  { name: "Categories", icon: "view-module", library: "MaterialIcons" },
  { name: "Symptoms", icon: "heart", library: "FontAwesome5" },
  { name: "Duration", icon: "time-outline", library: "Ionicons" },
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      {categories.map((item, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          {item.library === "FontAwesome5" && (
            <FontAwesome5 name={item.icon} size={13} color="#004AAD" />
          )}
          {item.library === "Ionicons" && (
            <Ionicons name={item.icon} size={15} color="#004AAD" />
          )}
          {item.library === "MaterialIcons" && (
            <MaterialIcons name={item.icon} size={15} color="#004AAD" />
          )}
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 14,
  },
  button: {
    backgroundColor: "#E8F0FF",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  text: {
    color: "#004AAD",
    fontWeight: "600",
    marginLeft: 6,
    fontSize: 13,
  },
});
