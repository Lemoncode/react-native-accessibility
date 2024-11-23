import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ContributorsPod } from "../contributors";
import { Stars, Language } from "./components";
import * as vm from "./repository-detail.vm";

interface Props {
  data: vm.GithubRepository;
}

export const RepositoryDetail: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Pressable onPress={() => router.back()} accessibilityLabel="Repositories, back button">
            <MaterialIcons style={styles.backIcon} name="chevron-left" />
          </Pressable>
          <Text style={styles.title} numberOfLines={1} accessibilityRole="header">
            {data.name}
          </Text>
        </View>
        <View style={styles.headerInfo}>
          <Stars count={data.stars} />
          <Language lang={data.language} />
        </View>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.description}>{data.description}</Text>
        {data.topics?.length > 0 && (
          <Text style={styles.topics}>Topics: {data.topics.join(", ")}</Text>
        )}
        <View style={styles.contributors}>
          <ContributorsPod
            organization={"lemoncode"}
            repositoryName={data.name}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backIcon: {
    fontSize: 36,
  },
  content: {
    padding: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  topics: {
    fontSize: 18,
    marginBottom: 15,
  },
  contributors: {
    padding: 10,
  },
});
