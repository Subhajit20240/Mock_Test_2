import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BrowseButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Browse Library</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 18,
    shadowColor: "#007AFF",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
