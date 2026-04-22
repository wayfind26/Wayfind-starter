import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    
      Wayfind — The Planner's Advantage
      
        Planner-centric community for discovering vetted vendors, sharing reviews, and collaborating with peers.
      
      
    
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "700", color: "#000" },
  subtitle: { marginTop: 12, fontSize: 16, color: "#333", textAlign: "center" }
});
