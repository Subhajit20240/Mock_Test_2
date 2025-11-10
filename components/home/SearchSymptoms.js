import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function SearchSymptoms() {
  return (
    <View>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#777" />
        <TextInput
          style={styles.input }
          
          placeholder="Search for symptom or condition..."
          placeholderTextColor="#888"
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipContainer}
      >
        {[
          { label: "Asthma", color: "#F59E0B" },
          { label: "Chest pain", color: "#10B981" },
          { label: "Heart diseases", color: "#EF4444" },
        ].map((chip, i) => (
          <View key={i} style={styles.chip}>
            <View style={[styles.dot, { backgroundColor: chip.color }]} />
            <Text style={styles.chipText}>{chip.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 14,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#333",
    marginLeft: 8,
    borderRadius:50
  },
  chipContainer: {
    flexDirection: "row",
    marginTop: 14,
    gap: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 16,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  chipText: {
    color: "#374151",
    fontWeight: "500",
    fontSize: 13,
  },
});
