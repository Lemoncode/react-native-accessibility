import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IconButton } from "../../common/components";
import { InfoDialog } from "./components/info-dialog.component";
import * as vm from "./organization.vm";
import { A11y } from "react-native-a11y-order";

interface Props {
  org: vm.Organization;
}

export const Organization: React.FC<Props> = ({ org }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title} accessibilityRole="header">
          {org.name.toUpperCase()}
        </Text>
        <View
          accessibilityLabel={`${org.name} logo`}
          accessible={true}
          accessibilityRole="image"
        >
          <Image style={styles.avatar} source={{ uri: org.avatarUrl }} />
        </View>
        <A11y.Order>
          <View style={styles.row}>
            <A11y.Index index={1}>
              <Text style={styles.description}>{org.description}</Text>
            </A11y.Index>
            <A11y.Index index={2}>
              <IconButton
                iconName="information-outline"
                onPress={() => setOpen(true)}
                accessibilityLabel={`More information about ${org.name}`}
              />
            </A11y.Index>
          </View>
        </A11y.Order>
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
