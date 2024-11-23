import { Stack } from "expo-router/stack";

export default () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="repositories/[name]"
        options={{
          headerShown: true,
          headerBackVisible: false,
          title: "Repository info",
        }}
      />
    </Stack>
  );
};
