// components/Header.js
import { FontAwesome5 } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <FontAwesome5 name="broadcast-tower" size={20} color="#007AFF" />
        <Text style={styles.logo}>HealthCast</Text>
      </View>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B1220',
    marginLeft: 6,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
});
