import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function EpisodeCard({ title, color, iconUri, episodes, date, count }) {
  const isLocalImage = typeof iconUri === 'number';
  
  return (
    <View style={[styles.card, { backgroundColor: color }]}>

      <View style={styles.iconContainer}>
        <Image 
          source={isLocalImage ? iconUri : { uri: iconUri }} 
          style={styles.iconImage} 
        />
      </View>


      <View style={styles.content}>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.infoRow}>
          <Ionicons name="headset-outline" size={13} color="#6b7280" />
          <Text style={styles.infoText}>{count} Episodes</Text>
          <Ionicons name="time-outline" size={13} color="#6b7280" style={{ marginLeft: 10 }} />
          <Text style={styles.infoText}>Updated {date}</Text>
        </View>

  
        <View style={styles.episodeList}>
          {episodes.map((ep, index) => (
            <View key={index} style={styles.episodeRow}>
              {ep.iconFamily === "FontAwesome5" ? (
                <FontAwesome5 name={ep.icon} size={13} color={ep.color} />
              ) : (
                <FontAwesome name={ep.icon} size={13} color={ep.color} />
              )}
              <Text style={styles.episodeText}>{ep.text}</Text>
            </View>
          ))}
          <Text style={styles.more}>+{episodes.extra || 10} more</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 38,
    height: 38,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    marginLeft: 14,
  },
  title: {
    fontWeight: "700",
    fontSize: 17,
    marginBottom: 5,
    color: "#0B1220",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    color: "#6b7280",
    fontSize: 12,
    marginLeft: 4,
  },
  episodeList: {
    marginTop: 4,
  },
  episodeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  episodeText: {
    marginLeft: 8,
    color: "#374151",
    fontSize: 14,
    fontWeight: "400",
  },
  more: {
    color: "#007AFF",
    marginTop: 6,
    fontWeight: "500",
    fontSize: 14,
  },
});
