import { FontAwesome5 } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HeaderHome() {
  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <View style={styles.logoRow}>
          <FontAwesome5 name="broadcast-tower" size={20} color="#007AFF" />
          <Text style={styles.logoText}>HealthCast</Text>
        </View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.heading}>
        Understand medical conditions with
      </Text>
      <Text style={[styles.heading, { color: "#007AFF" }]}>
        doctor-approved audio
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 6,
    color: "#0B1220",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  heading: {
    fontSize: 26,
    fontWeight: "600",
    color: "#0B1220",
    lineHeight: 34,
  },
});
