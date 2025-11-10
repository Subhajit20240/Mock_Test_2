import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const playlists = [
  { title: "Chronic Pain", episodes: 8, icon: "square", color: "#007AFF" },
  { title: "Mindfulness for Sleep", episodes: 8, icon: "bed", color: "#9333EA" },
  { title: "Health Heart Basics", episodes: 12, icon: "heartbeat", color: "#EF4444" },
];

export default function PlaylistList() {
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Doctor-curated playlists</Text>
        <Text style={styles.link}>See all</Text>
      </View>

      {playlists.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={[styles.iconBox, { backgroundColor: `${item.color}1A`, borderColor: `${item.color}26` }]}>
            <FontAwesome5 name={item.icon} size={16} color={item.color} />
          </View>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.episodes} episodes</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    paddingHorizontal: 2,
  },
  heading: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0B1220",
  },
  link: {
    color: "#007AFF",
    fontWeight: "700",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0B1220",
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 3,
  },
});
