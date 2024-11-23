import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IconButton } from "../../common/components";
import { InfoDialog } from "./components/info-dialog.component";
import * as vm from "./organization.vm";

interface Props {
  org: vm.Organization;
}

export const Organization: React.FC<Props> = ({ org }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{org.name.toUpperCase()}</Text>
        <Image style={styles.avatar} source={{ uri: org.avatarUrl }} />

        <View style={styles.row}>
          <Text style={styles.description}>{org.description}</Text>
          <IconButton
            iconName="information-outline"
            onPress={() => setOpen(true)}
          />
        </View>
      </View>

      <InfoDialog org={org} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
  },
  avatar: {
    width: 250,
    height: 250,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
