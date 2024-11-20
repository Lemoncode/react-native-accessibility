import { Stack } from "expo-router/stack";

export default () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="repos/[name]"
        options={{
          headerShown: true,
          headerBackVisible: true,
          title: "Repository info",
          headerBackTitle: "Repositories"
        }}
      />
    </Stack>
  );
};
