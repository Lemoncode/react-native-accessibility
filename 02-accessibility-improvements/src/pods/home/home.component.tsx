import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import * as Linking from "expo-linking";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { A11y } from "react-native-a11y-order";
import { Organization } from "./home.vm";
import { InfoDialog } from "./components/info-dialog.component";
import { IconButton } from "../../common/components";

interface Props {
  org: Organization;
}

export const Home: React.FC<Props> = ({ org }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title} accessibilityRole="header">
          {org.name.toUpperCase()}
        </Text>
        <View
        accessible={true}
          accessibilityRole="image"
          accessibilityLabel={`${org.name.toUpperCase()} logo`}
        >
          <Image
            style={styles.avatar}
            source={{ uri: org.avatarUrl }}
          />
        </View>

        <View style={styles.row}>
          <A11y.Order>
            <A11y.Index index={1}>
              <Text style={styles.description}>{org.description}</Text>
            </A11y.Index>
            <A11y.Index index={2}>
              <IconButton
                iconName="information-outline"
                onPress={() => setOpen(true)}
                accessibilityLabel={`More info about ${org.name.toUpperCase()}`}
              />
            </A11y.Index>
          </A11y.Order>
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
