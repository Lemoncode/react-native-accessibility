import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

import * as api from "./api";
import { RepositoryDetail } from "./repository-detail.component";
import { mapGithubRepositoryToVM } from "./repository-detail.mappers";
import * as vm from "./repository-detail.vm";

export const RepositoryDetailPod: React.FC = () => {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [repo, setRepo] = React.useState<vm.GithubRepository>();

  React.useEffect(() => {
    if (name) {
      api
        .getGithubRepoDetail("lemoncode", name)
        .then(mapGithubRepositoryToVM)
        .then(setRepo);
    }
  }, [name]);

  return repo ? (
    <RepositoryDetail data={repo} />
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
