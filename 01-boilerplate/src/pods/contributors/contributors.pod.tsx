import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Contributor } from "./contributors.vm";
import { getRepoContributors } from "./repository";
import { Contributors } from "./contributors.component";

interface Props {
  organization: string;
  repositoryName: string;
}

export const ContributorsPod: React.FC<Props> = (props) => {
  const { organization, repositoryName } = props;
  const [contributors, setContributors] = React.useState<Contributor[]>();

  React.useEffect(() => {
    getRepoContributors(organization, repositoryName).then(setContributors);
  }, [organization, repositoryName]);

  console.log({ contributors });

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
