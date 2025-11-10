// screens/LibraryScreen.js
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SectionList from '../components/SectionList';

export default function LibraryScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <Text style={styles.title}>Library</Text>
      <Text style={styles.subtitle}>Doctor's approved audio episodes</Text>
      <SearchBar />
      <CategoryList />
      <SectionList />
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0E8F7',
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 12,
    color: '#0B1220',
  },
  subtitle: {
    color: '#6B7280',
    marginTop: 4,
    fontSize: 15,
  },
});
