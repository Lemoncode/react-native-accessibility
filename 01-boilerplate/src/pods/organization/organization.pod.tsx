import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import * as api from "./api";
import { Organization } from "./organization.component";
import type * as vm from "./organization.vm";
import { mapOrganizationToVm } from "./organization.mappers";

export const OrganizationPod = () => {
  const [org, setOrg] = React.useState<vm.Organization>();

  React.useEffect(() => {
    api.getOrganization("lemoncode").then(mapOrganizationToVm).then(setOrg);
  }, []);

  console.log({ org });

  return org ? (
    <Organization org={org} />
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
