import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { getOrganizationRepo } from "./repository";
import { Repo } from "./repo.component";
import * as vm from "./repo.vm";

export const RepoPod = () => {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [repo, setRepo] = React.useState<vm.Repo>();

  React.useEffect(() => {
    if (name) {
      getOrganizationRepo("lemoncode", name).then(setRepo);
    }
  }, [name]);

  return repo ? (
    <Repo data={repo} />
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
