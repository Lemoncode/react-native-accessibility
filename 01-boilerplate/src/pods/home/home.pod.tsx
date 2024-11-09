import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Organization } from "./home.vm";
import { getOrganization } from "./repository";
import { Home } from "./home.component";

export const HomePod = () => {
  const [org, setOrg] = React.useState<Organization>();

  React.useEffect(() => {
    getOrganization("lemoncode").then(setOrg);
  }, []);

  return org ? (
    <Home org={org} />
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
