import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
      <Text>Loading...</Text>
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
