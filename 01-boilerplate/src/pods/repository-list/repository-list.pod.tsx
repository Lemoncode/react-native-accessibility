import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { OrganizationRepository } from "./repository-list.vm";
import * as api from "./api";
import { RepositoryList } from "./repository-list.component";
import { mapOrganizationRepositoriesToVM } from "./repository-list.mappers";

export const RepositoryListPod = () => {
  const [repos, setRepos] = React.useState<OrganizationRepository[]>();

  React.useEffect(() => {
    api
      .getOrganizationRepositories("lemoncode")
      .then(mapOrganizationRepositoriesToVM)
      .then(setRepos);
  }, []);

  return repos ? (
    <RepositoryList list={repos} />
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
