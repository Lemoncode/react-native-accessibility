import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";

interface Props {
  iconName: keyof typeof MaterialIcon.glyphMap;
  onPress: () => void;
  accessibilityLabel: string;
}

export const IconButton: React.FC<Props> = (props) => {
  const { iconName, onPress, accessibilityLabel } = props;

  return (
    <Pressable accessibilityRole="button" accessibilityLabel={accessibilityLabel}>
      <View style={styles.button}>
        <MaterialIcon style={styles.icon} name={iconName} onPress={onPress} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 35,
  },
  icon: {
    color: "white",
    fontSize: 26,
  },
});
