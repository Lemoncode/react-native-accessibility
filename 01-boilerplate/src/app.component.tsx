import { View, Text, StyleSheet } from "react-native";

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Home!!!</Text>
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
