import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Fontawesome from "@expo/vector-icons/FontAwesome";
import { OrganizationRepository } from "../repository-list.vm";

interface Props {
  repo: OrganizationRepository;
  onSelect: () => void;
}

export const Item: React.FC<Props> = ({ repo, onSelect }) => (
  <TouchableOpacity onPress={onSelect} accessibilityRole="button">
    <View style={styles.container}>
      <View>
        <Image style={styles.avatar} source={{ uri: repo.owner.avatarUrl }} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {repo.name}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {repo.description}
        </Text>
      </View>
      <Fontawesome name="chevron-right" size={16} color="#333" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
});
