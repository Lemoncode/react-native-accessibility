import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface Props {
  lang: string;
}

export const Language: React.FC<Props> = ({ lang }) => {
  return (
    lang && (
      <View style={styles.container}>
      <MaterialIcons
          style={styles.starIcon}
          name={
            `language-${lang.toLowerCase()}` as keyof typeof MaterialIcons.glyphMap
          }
          accessibilityLabel={`Main language: ${lang}`}
          accessibilityRole="text"
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starIcon: {
    fontSize: 26,
    color: "#0008ff",
  },
  text: {
    fontSize: 18,
  },
});
