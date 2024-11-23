import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import * as api from "./api";
import { Contributors } from "./contributors.component";
import { mapContributorsToVM } from "./contributors.mappers";
import type { Contributor } from "./contributors.vm";

interface Props {
  organization: string;
  repositoryName: string;
}

export const ContributorsPod: React.FC<Props> = (props) => {
  const { organization, repositoryName } = props;
  const [contributors, setContributors] = React.useState<Contributor[]>();

  React.useEffect(() => {
    api
      .getRepoContributors(organization, repositoryName)
      .then(mapContributorsToVM)
      .then(setContributors);
  }, [organization, repositoryName]);

  return contributors ? (
    <Contributors list={contributors} />
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
