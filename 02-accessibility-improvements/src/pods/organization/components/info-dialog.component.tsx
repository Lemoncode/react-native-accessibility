import React from "react";
import { Modal, StyleSheet, View, Text } from "react-native";
import * as Linking from "expo-linking";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton } from "../../../common/components/icon-button.component";
import { Organization } from "../organization.vm";

interface Props {
  open: boolean;
  org: Organization;
  onClose: () => void;
}

export const InfoDialog: React.FC<Props> = ({ org, open, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <View />
            <Text style={styles.title} accessibilityRole="header">More info</Text>
            <MaterialIcon
              style={styles.closeIcon}
              name="close"
              onPress={onClose}
              accessibilityRole="button"
              accessibilityLabel="Close"
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Location: {org.location}</Text>
            <Text style={styles.text}>+{org.publicRepos} repositories</Text>
            <Text style={styles.text}>+{org.followers} followers</Text>
          </View>
          <View style={styles.footer}>
            <IconButton
              iconName="email-outline"
              onPress={() => Linking.openURL(`mailto://${org.email}`)}
              accessibilityLabel="Send an email"
            />
            <IconButton
              iconName="web"
              onPress={() => Linking.openURL(org.blog)}
              accessibilityLabel="Visit website"
            />
            <IconButton
              iconName="code-tags"
              onPress={() => Linking.openURL(org.htmlUrl)}
              accessibilityLabel="Visit GitHub"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeIcon: {
    fontSize: 24,
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
  },
  footer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    width: "100%",
  },
});
