import { Image, StyleSheet, Text, View } from "react-native";

const categories = [
  {
    title: "Body",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616554.png",
    color: "#E6F9F5",
  },
  {
    title: "Symptoms",
    icon: "https://cdn-icons-png.flaticon.com/512/9448/9448683.png",
    color: "#FFE8E8",
  },
  {
    title: "Treatment",
    icon: "https://cdn-icons-png.flaticon.com/512/3226/3226908.png",
    color: "#EEE9FF",
  },
];

export default function CategoryGrid() {
  return (
    <View>
      <Text style={styles.heading}>Browse by category</Text>
      <View style={styles.grid}>
        {categories.map((item, index) => (
          <View key={index} style={[styles.card, { backgroundColor: item.color }]}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 17,
    fontWeight: "700",
    marginVertical: 14,
    color: "#0B1220",
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "30%",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  text: {
    fontWeight: "600",
    color: "#374151",
    fontSize: 14,
  },
});
