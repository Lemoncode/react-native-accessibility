import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import * as Linking from "expo-linking";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Organization } from "./home.vm";

interface Props {
  org: Organization;
}

export const Home: React.FC<Props> = ({ org }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{org.name.toUpperCase()}</Text>
      <Image style={styles.avatar} source={{ uri: org.avatarUrl }} />
      <Text style={styles.description}>{org.description}</Text>
      <View style={styles.buttons}>
        <FontAwesome.Button
          name="envelope-o"
          onPress={() => Linking.openURL(`mailto://${org.email}`)}
        >
          Contact us
        </FontAwesome.Button>
        <FontAwesome.Button
          name="bookmark-o"
          onPress={() => Linking.openURL(org.blog)}
        >
          Website
        </FontAwesome.Button>
      </View>
    </View>
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
  buttons: {
    flexDirection: "row",
    gap: 20,
  },
});
