import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Contributor } from "./contributors.vm";

interface Props {
  list: Contributor[];
}

export const Contributors: React.FC<Props> = ({ list }) => {
  return (
    <>
      <Text style={styles.title}>Contributors:</Text>
      <ScrollView>
        <View style={styles.container}>
          {list.map((item) => (
            <Image
              key={item.id}
              style={styles.avatar}
              source={{ uri: item.avatarUrl }}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
});
