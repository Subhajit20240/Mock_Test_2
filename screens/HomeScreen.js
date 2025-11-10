import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderHome from "../components/home/HeaderHome";
import BrowseButton from "../components/home/BrowseButton";
import SearchSymptoms from "../components/home/SearchSymptoms";
import CategoryGrid from "../components/home/CategoryGrid";
import PlaylistList from "../components/home/PlaylistList";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeaderHome />
      <BrowseButton />
      <SearchSymptoms />
      <CategoryGrid />
      <PlaylistList />
      <View style={{ height: 40 }} /> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E8F7",
    paddingHorizontal: 16,
  },
});
