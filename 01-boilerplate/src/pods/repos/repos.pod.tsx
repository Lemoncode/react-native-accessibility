import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Repo } from "./repos.vm";
import { getOrganizationRepos } from "./repository";
import { Repos } from "./repos.component";

export const ReposPod = () => {
  const [repos, setRepos] = React.useState<Repo[]>();

  React.useEffect(() => {
    getOrganizationRepos("lemoncode").then(setRepos);
  }, []);

  return repos ? (
    <Repos list={repos} />
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
